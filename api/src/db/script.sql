-- Crear tablas
CREATE TABLE polymers(
    id INT PRIMARY KEY,
    name TEXT,
    abbreviation VARCHAR(5),
    description TEXT,
    usage TEXT
);

CREATE TABLE types(
    id INT PRIMARY KEY,
    name TEXT
);

CREATE TABLE hierarchy_types(
    type_superior_id INT,
    type_inferior_id INT
);

CREATE TABLE polymers_types(
    polymer_id INT,
    type_id INT
);

CREATE TABLE properties(
    polymer_id INT PRIMARY KEY,
    densidad                FLOAT,
    indice_flujo            FLOAT,
    resistencia_traccion    FLOAT,
    modulo_traccion         FLOAT,
    resistencia_impacto     FLOAT
);

----------------------------------------------

INSERT INTO polymers(id, name, abbreviation, description, usage)
VALUES (
1,
'Polietileno',
'PE',

-- Description
'El polietileno o polietileno (PE) es el plástico más comúnmente producido. Es un polímero que se utiliza principalmente para envases (bolsas de plástico, películas de plástico, geomembranas y envases como botellas, etc.). En 2017, se producían anualmente más de 100 millones de toneladas de resinas de polietileno, lo que representa el 34% del mercado total de plásticos.

Se conocen muchos tipos de polietileno, la mayoría con la fórmula química (C2H4)n. El PE suele ser una mezcla de polímeros similares de etileno, con diversos valores de n. Puede ser de baja densidad o de alta densidad y muchas variaciones de los mismos. Sus propiedades pueden modificarse aún más mediante reticulación o copolimerización.

Todas sus formas son atóxicas y químicamente resistentes, lo que contribuye a la popularidad del polietileno como plástico multiuso. Sin embargo, la resistencia química del polietileno también lo convierte en un contaminante de larga vida y resistente a la descomposición cuando se desecha de forma inadecuada. Al ser un hidrocarburo, el polietileno es de incoloro a opaco (sin impurezas ni colorantes) y combustible.',

-- Usage
'- Bolsas plásticas de todo tipo.

- Láminas para envasado de todo tipo de alimentos, fármacos y productos agroindustriales.

- Contenedores herméticos de uso casero.

- Tuberías para riego.

- Pomos, tubos, recubrimientos.

- Filme de cocina (papel plástico para envolver).

- Envases para detergentes, champú, lejía, etc.

- Piezas mecánicas, guías de cadena.

- Biberones, juguetes, base para pañales desechables.

- Cubos de agua y tambores.

- Recubrimiento de lagunas, canales, depósitos de agua, etc.

- Fabricación de compuesto de harina de madera.

- Materia prima para rotomoldeo.

- Cables, hilos, tuberías.'
);

-- INSERT INTO properties(
--     polymer_id,
--     densidad,
--     indice_flujo,
--     resistencia_traccion,
--     modulo_traccion,
--     resistencia_impacto
-- )
-- VALUES (
--     1,
--     0.96,
--     -- 5.25,
--     -- 32.5,
--     -- 1650,
--     -- 7.5
-- );

---------------------------------------------

INSERT INTO polymers(id, name, abbreviation, description, usage)
VALUES (
2,
'Polipropileno',
'PP',

-- Description
'El polipropileno (PP), también conocido como polipropeno, es un polímero termoplástico utilizado en una amplia variedad de aplicaciones.

El polipropileno pertenece al grupo de las poliolefinas y es parcialmente cristalino y apolar. Sus propiedades son similares a las del polietileno, pero es ligeramente más duro y resistente al calor. Es un material blanco, mecánicamente robusto y con una gran resistencia química.

El polipropileno es el segundo plástico básico más producido (después del polietileno).',

-- Usage
'- Envases y embalajes: el PP se emplea en la fabricación de recipientes y envases para alimentos, productos químicos, cosméticos y más.

- Industria automotriz: se usa en la fabricación de piezas de automóviles, como parachoques, paneles de instrumentos y rejillas de ventilación.

- Textiles: el PP se utiliza para fabricar fibras no tejidas utilizadas en alfombras, tapicería, cuerdas y bolsas reutilizables.

- Electrodomésticos: se emplea en la fabricación de componentes de electrodomésticos, como carcasas de lavadoras y secadoras.

- Agricultura: se emplea en la fabricación de tuberías para sistemas de riego, envases para productos agrícolas y mallas para protección de cultivos.'
);

INSERT INTO properties(
    polymer_id,
    densidad,
    indice_flujo,
    resistencia_traccion,
    modulo_traccion,
    resistencia_impacto
)
VALUES (
    2,
    0.9,
    5.25,
    32.5,
    1650,
    7.5
);

---------------------------------------------

INSERT INTO polymers(id, name, abbreviation, description, usage)
VALUES (
3,
'Polivinilclorado',
'PVC',

-- Description
'El cloruro de polivinilo (PVC), también conocido como vinilo o polivinilo, es el tercer polímero sintético de plástico más producido en el mundo (después del polietileno y el polipropileno). Cada año se producen unos 40 millones de toneladas de PVC.

El PVC se presenta en forma rígida (a veces abreviada como RPVC) y flexible. El PVC rígido se utiliza en la construcción para tuberías, puertas y ventanas. También se utiliza para fabricar botellas de plástico, envases y tarjetas bancarias o de socio. La adición de plastificantes hace que el PVC sea más blando y flexible. Se utiliza en fontanería, aislamiento de cables eléctricos, suelos, señalización, discos fonográficos, productos inflables y en sustitutos del caucho[10] Con algodón o lino, se utiliza en la fabricación de lonas.

El cloruro de polivinilo es un sólido blanco y quebradizo. Es insoluble en todos los disolventes, pero se hincha en su monómero y en algunos disolventes de hidrocarburos clorados.',

-- Usage
'- Tuberías y conexiones para sistemas de agua y drenaje.

- Revestimientos de cables eléctricos y electrónicos.

- Materiales de construcción como ventanas, puertas y revestimientos de paredes.

- Artículos de oficina, como carpetas y láminas protectoras.'
);

INSERT INTO properties(
    polymer_id,
    densidad,
    indice_flujo,
    resistencia_traccion,
    modulo_traccion,
    resistencia_impacto
)
VALUES (
    3,
    1.375,
    3.25,
    52.5,
    2500,
    22.5
);

---------------------------------------------

INSERT INTO polymers(id, name, abbreviation, description, usage)
VALUES (
4,
'Poliestireno',
'PS',

-- Description
'El poliestireno (PS) es un polímero sintético fabricado a partir de monómeros del hidrocarburo aromático estireno. El poliestireno puede ser sólido o espumado. El poliestireno de uso general es transparente, duro y quebradizo. Es una resina barata por unidad de peso. Es una mala barrera contra el aire y el vapor de agua y tiene un punto de fusión relativamente bajo El poliestireno es uno de los plásticos más utilizados, con una producción de varios millones de toneladas al año El poliestireno es transparente por naturaleza, pero puede colorearse con colorantes. Se utiliza en envases protectores (como los cacahuetes de embalaje y los estuches utilizados para almacenar discos ópticos como CD y, en ocasiones, DVD), contenedores, tapas, botellas, bandejas, vasos, cubiertos desechables, en la fabricación de maquetas y como material alternativo para discos fonográficos.

Como polímero termoplástico, el poliestireno se encuentra en estado sólido (vítreo) a temperatura ambiente, pero fluye si se calienta por encima de unos 100 °C, su temperatura de transición vítrea. Al enfriarse, recupera su rigidez. Este comportamiento de la temperatura se aprovecha para la extrusión (como en la espuma de poliestireno) y también para el moldeo y la conformación al vacío, ya que se puede colar en moldes con detalles finos. El comportamiento térmico puede controlarse mediante fotocruzamiento.

Según las normas ASTM, el poliestireno se considera no biodegradable. Se acumula como basura en el medio ambiente exterior, sobre todo a lo largo de costas y vías fluviales, especialmente en su forma de espuma, y en el océano Pacífico.',

-- Usage
'-Alimentos y empaques: debido a su ligereza, durabilidad y capacidad de protección es ampliamente utilizado en la fabricación de bandejas, contenedores, cajas y espumas de embalaje para proteger productos delicados durante el transporte y almacenamiento. Mantiene la temperatura, resiste a la humedad y su facilidad de moldeo lo hace adecuado para su uso en la industria de servicios de alimentos.

- Construcción: dada su baja conductividad térmica, se utiliza en forma de espuma rígida para la fabricación de aislantes térmicos y acústicos. También se utiliza en la creación de molduras decorativas, paneles aislantes y sistemas de encofrado.

- Automotriz: se utiliza para fabricar diversas piezas y componentes, es decir, autopartes, como paneles de instrumentos, revestimientos internos, consolas, rejillas de ventilación y soportes de almacenamiento.

- Médica: el poliestireno es común en la fabricación de dispositivos médicos desechables, ya que tiene la capacidad para resistir la esterilización y su transparencia.

- Consumo: este es un material apto para la creación de juguetes y artículos de recreación, en tanto es altamente resistente:

- Electrónica: a partir del poliestireno se fabrican componentes como carcasas de dispositivos, aislantes y soportes para circuitos impresos.'
);

INSERT INTO properties(
    polymer_id,
    densidad,
    indice_flujo,
    resistencia_traccion,
    modulo_traccion,
    resistencia_impacto
)
VALUES (
    4,
    1.05,
    5,
    40,
    2250,
    4.5
);

---------------------------------------------

INSERT INTO polymers(id, name, abbreviation)
VALUES (
    5,	'Polietilentereftalato',    'PET'
);

INSERT INTO properties(
    polymer_id,
    densidad,
    indice_flujo,
    resistencia_traccion,
    modulo_traccion,
    resistencia_impacto
)
VALUES (
    5,
    1.56,
    10.25,
    67.5,
    3000,
    12.5
);

---------------------------------------------

INSERT INTO polymers(id, name, abbreviation)
VALUES (
    6,	'Poliamidas',               'PA'
);

---------------------------------------------

INSERT INTO polymers(id, name, abbreviation)
VALUES (
    7,	'Polioximetilenos',         'POM'
);

---------------------------------------------

INSERT INTO polymers(id, name, abbreviation)
VALUES (
    8,	'Policarbonato',            'PC'
);
INSERT INTO properties(
    polymer_id,
    densidad,
    indice_flujo,
    resistencia_traccion,
    modulo_traccion,
    resistencia_impacto
)
VALUES (
    8,
    1.21,
    12.5,
    65,
    2250,
    70
);

---------------------------------------------

INSERT INTO polymers(id, name, abbreviation)
VALUES (
    9,	'Poliacrilonitrilo',        'PAN'
);

INSERT INTO polymers(id, name, abbreviation)
VALUES (
    10,	'Politetraflouroetileno',   'PTFE'
);

INSERT INTO types(id, name)
VALUES (
    1,  'Comportamiento con la temperatura'
);

INSERT INTO types(id, name)
VALUES (
    2,  'Termoplásticos'
);

INSERT INTO types(id, name)
VALUES (
    3,  'Plásticos comunes'
);

INSERT INTO types(id, name)
VALUES (
    4,  'Plásticos de ingeniería'
);

INSERT INTO hierarchy_types(type_superior_id, type_inferior_id)
VALUES(
    -- Comportamiento con la temperatura
    1, 2
);

INSERT INTO hierarchy_types(type_superior_id, type_inferior_id)
VALUES(
    -- Termoplásticos
    2, 3
);

INSERT INTO hierarchy_types(type_superior_id, type_inferior_id)
VALUES(
    2, 4
);

-- Polietileno
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    1, 1
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    1, 2
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    1, 3
);
-- Polipropileno
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    2, 1
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    2, 2
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    2, 3
);
-- Polivinilclorado
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    3, 1
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    3, 2
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    3, 3
);
-- Poliesrireno
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    4, 1
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    4, 2
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    4, 3
);
-- Polietilentereftalato
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    5, 1
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    5, 2
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    5, 3
);
-- Poliamidas
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    6, 1
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    6, 2
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    6, 4
);
-- Polioximetilenos
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    7, 1
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    7, 2
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    7, 4
);
-- Policarbonato
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    8, 1
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    8, 2
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    8, 4
);
-- Poliacrilonitrilo
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    9, 1
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    9, 2
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    9, 4
);
-- Politetraflouroetileno
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    10, 1
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    10, 2
);
INSERT INTO polymers_types(polymer_id, type_id)
VALUES (
    10, 4
);

