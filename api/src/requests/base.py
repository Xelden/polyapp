import src.ai.ai as ai
import src.db.connect as db
import src.requests.utilities as utilities

def get_all(field: str):
    field = utilities.Check.field(field)
    if (field.startswith("ERROR")):
        return field;

    vars = "id, name"
    if (field == "polymers"):
        vars += ", abbreviation"

    query = f"SELECT {vars} FROM {field}"
    return db.cursor.execute(query).fetchall()

def get_from_type(field: str, type_id: str):
    field = utilities.Check.field(field)
    if (field.startswith("ERROR")):
        return field;

    type_id = utilities.Check.id(field, type_id)
    if (type_id.startswith("ERROR")):
        return type_id;

    match field:
        case "types":
            query = f"""
                SELECT  types.id, types.nombre
                FROM    types, hierarchy_types
                WHERE   hierarchy_types.type_inferior_id = types.id AND
                        {type_id} = hierarchy_types.type_superior_id;
            """

        case "polymers":
            query = f"""
                SELECT  polymers.id, polymers.nombre
                FROM    polymers, polymers_types
                WHERE   polymers_types.polymer_id = polymers.id AND
                        {type_id} = polymers_types.type_id;
            """

        case _:
            return { "message": "Error" }

    return db.cursor.execute(query).fetchall()

def get_properties(poly_id: str) -> dict | str:
    poly_id = utilities.Check.id("polymers", poly_id)
    if (poly_id.startswith("ERROR")):
        return poly_id;

    query = f"""
        SELECT *
        FROM properties
        WHERE polymer_id = {poly_id};
    """

    values = db.cursor.execute(query).fetchall()[0]
    properties = [
        "id de polímero",
        "densidad",
        "índice de flujo",
        "resistencia de tracción",
        "módulo de tracción",
        "resistencia al impacto"
    ]
    final = { }

    for i in range(len(properties)):
        final[properties[i]] = values[i]

    return final

def get_data(poly_id: str, type: str) -> str:
    poly_id = utilities.Check.id("polymers", poly_id)
    if (poly_id.startswith("ERROR")):
        return poly_id;

    query = f"""
        SELECT {type}
        FROM polymers
        WHERE id = {poly_id};
    """

    return db.cursor.execute(query).fetchall()[0][0] + '\n'

def get_mix(data) -> str: 
    properties = [
        "densidad",
        "id de polímero",
        "módulo de tracción",
        "resistencia al impacto",
        "resistencia de tracción",
        "índice de flujo",
    ]

    percentages = data["percentages"]
    materials = data["materials"]

    final = { }

    for i in range(0, len(materials)):
        curr_polymer = utilities.Check.id("polymers", str(materials[i]))

        if (curr_polymer.startswith("ERROR")):
            return curr_polymer;

        percentage = float(percentages[i])
        curr_properties = get_properties(curr_polymer)

        for property in properties:
            if property == "id de polímero":
                continue

            curr_property_value = curr_properties[property] * percentage / 100

            if i == 0:
                final[property] = curr_property_value
            else:
                final[property] += curr_property_value

    return ai.get_chat_response_blend(final)

def get_suggestion(data) -> str:
    return ai.get_chat_response_suggest(data["prompt"], get_all("polymers"))
