CREATE DATABASE listapozos;
CREATE TABLE pozos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40) NOT NULL, 
    ubicacion VARCHAR(40),
    produccion_diaria NUMERIC,
    estado VARCHAR(40) NOT NULL CHECK (estado IN ('activo', 'inactivo'))
);--Estableciendo parametros de la lista

INSERT INTO pozos(nombre, ubicacion,produccion_diaria,estado)
    VALUES ('Pozo1', 'P1', 2500, 'activo'),
        ('Pozo2', 'P2', 4500, 'inactivo'),
        ('Pozo3', 'P1', 5000, 'activo'),
        ('Pozo4', 'P3', 2000, 'inactivo'),
        ('Pozo5', 'P2', 7000, 'activo');