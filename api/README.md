# API

## Endpoints

### GET

#### `/`

Verificar que la API está corriendo.

#### `/all-<field>`

Donde `field` es `types` o `polymers`, retorna la lista de todos los tipos y polímeros disponibles.

#### `/<field>-from-type_id:<type_id>`

Retorna todos los tipos de polímeros o polímeros pertenecientes a un tipo según la ID de este último.

Por ejemplo:

- `/types-from-type_id:1` retorna todos los tipos de polímeros que son subtipos del tipo con ID 1.

- `/polymers-from-type_id:2` retorna todos los polímeros que pertenecen al tipo con  ID 2.

#### `/properties-from-polymer_id:<polymer_id>`

Retorna las propiedades del polímero con ID `<polymer_id`.

### `/usage-from-polymer_id:<polymer_id>`

Retorna un string con una lista de usos para el polímero.

### POST

#### `/mix`

Retorna una descripción de la mezcla entre varios polímeros, usa como formato un archivo JSON tal que:

```json
{
    "materials": [ 2, 3, 4, 5, 8 ],
    "percentages": [ 30, 40, 10, 10, 10 ]
}
```

#### `/suggest`

Retorna una sugerencia de polímeros a usar en función de un uso que entregue el usuario.

```json
{ "prompt": "bolsa plástica" }
```
