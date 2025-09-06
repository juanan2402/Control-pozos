import {Request, Response} from 'express';
import {QueryResult} from 'pg';
import {pool} from '../database';

//GET/pozos
export const getPozos = async(req:Request,res:Response):  Promise<Response>=>{
    try{
        const response: QueryResult =await pool.query('SELECT * FROM pozos');
        return res.status(200).json(response.rows);
    }catch(e){
        console.log(e);
        return res.status(500).json("Internal Server Error");
    }
}

//POST/pozos
export const createPozo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { nombre, ubicacion, produccion_diaria, estado } = req.body;

    if (!nombre || !ubicacion || produccion_diaria === undefined || !estado) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    const response: QueryResult = await pool.query(
      `INSERT INTO pozos (nombre, ubicacion, produccion_diaria, estado)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [nombre, ubicacion, produccion_diaria, estado]
    );

    return res.status(201).json(response.rows[0]);
  } catch (e) {
    console.error(e);
    return res.status(500).json("Internal Server Error");
  }
};

// PATCH /pozos/:id
export const updatePozoEstado = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    if (!estado) {
      return res.status(400).json({ error: "El campo 'estado' es obligatorio" });
    }

    const response: QueryResult = await pool.query(
      `UPDATE pozos SET estado = $1 WHERE id = $2 RETURNING *`,
      [estado, id]
    );

    if (response.rows.length === 0) {
      return res.status(404).json({ error: "Pozo no encontrado" });
    }

    return res.status(200).json(response.rows[0]);
  } catch (e) {
    console.error(e);
    return res.status(500).json("Internal Server Error");
  }
};
