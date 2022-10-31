import db from "../configuracion/db.js";
import { Batalla } from "../models/batallas.js";

// GET 
const encontrar_Batallas = async (req, res) => {
    try{
        const Batallas = await Batallas.findAll();
        res.json(Batallas)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// POST
const guardar_Batalla = async (req, res) => {
    //const {id_heroe, id_monstruo} = req.body.datosBatalla;
    const {id_heroe, id_monstruo} = req.body;

    const [existeBatalla, metadata] = await db.query(`SELECT * FROM Batallas WHERE id_heroe = ${id_heroe} AND id_monstruo = ${id_monstruo}`)

    if (existeBatalla[0]){
        const error = new Error("La batalla que se quiere ingresar ya existe");
        return res.status(400).json({msg: error.message});
    }
    
    try {
        const nuevaBatalla = await Batalla.create({
            id_heroe,
            id_monstruo
        });
        res.json(nuevaBatalla);

    } catch (error) {
        console.log(error);
    }
};

// DELETE
const eliminar_Batalla = async (req, res) => {
    try {
        const { id_batalla } = req.params;
        await Batalla.destroy({
            where:{
                id_batalla,
            },
        });
        res.json({mensaje: 'La batalla ' + id_batalla+ ' se elimino con exito'})
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({mensaje: 'Para eliminar una batalla, la batalla debe existir. Revise el id, por favor'});
    }
};

export { encontrar_Batallas, guardar_Batalla, eliminar_Batalla};