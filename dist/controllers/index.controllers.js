"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePozoEstado = exports.createPozo = exports.getPozos = void 0;
const express_1 = require("express");
const pg_1 = require("pg");
const database_1 = require("../database");
//GET/pozos
const getPozos = async (req, res) => {
    try {
        const response = await database_1.pool.query('SELECT * FROM pozos');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server Error");
    }
};
exports.getPozos = getPozos;
//POST/pozos
const createPozo = async (req, res) => {
    try {
        const { nombre, ubicacion, produccion_diaria, estado } = req.body;
        if (!nombre || !ubicacion || produccion_diaria === undefined || !estado) {
            return res.status(400).json({ error: "Faltan campos requeridos" });
        }
        const response = await database_1.pool.query(`INSERT INTO pozos (nombre, ubicacion, produccion_diaria, estado)
       VALUES ($1, $2, $3, $4)
       RETURNING *`, [nombre, ubicacion, produccion_diaria, estado]);
        return res.status(201).json(response.rows[0]);
    }
    catch (e) {
        console.error(e);
        return res.status(500).json("Internal Server Error");
    }
};
exports.createPozo = createPozo;
// PATCH /pozos/:id
const updatePozoEstado = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;
        if (!estado) {
            return res.status(400).json({ error: "El campo 'estado' es obligatorio" });
        }
        const response = await database_1.pool.query(`UPDATE pozos SET estado = $1 WHERE id = $2 RETURNING *`, [estado, id]);
        if (response.rows.length === 0) {
            return res.status(404).json({ error: "Pozo no encontrado" });
        }
        return res.status(200).json(response.rows[0]);
    }
    catch (e) {
        console.error(e);
        return res.status(500).json("Internal Server Error");
    }
};
exports.updatePozoEstado = updatePozoEstado;
//# sourceMappingURL=index.controllers.js.map