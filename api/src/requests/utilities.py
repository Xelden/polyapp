import src.db.connect as db

class Check():
    @staticmethod
    def __int(s):
        if s[0] in ('-', '+'):
            return s[1:].isdigit()
        return s.isdigit()

    @staticmethod
    def field(field: str):
        field = field.lower() # Case insensitive

        if (field != "types" and field != "polymers"):
            return "ERROR: field '" + field + "' doesn't exist.\n"

        return field;

    @staticmethod
    def id(field, id):
        if (not Check.__int(id)):
            return "ERROR: ID must be a positive integer.\n"

        if (int(id) < 1):
            return "ERROR: ID must be a positive value.\n"

        query = "\n".join([
            "SELECT MAX(id)",
            "FROM " + field + ";"
        ])

        max_val = int(db.cursor.execute(query).fetchone()[0]);

        if (int(id) > max_val):
            return "ERROR: no " + field + " with the ID '" + str(id) + "' could be found.\n"

        return id;
