import db from "../configuracion/db.js";
import { Patrocinador } from "../models/patrocinadores.js";
import { Patrocinador_Heroe } from "../models/patrocinadores_Heroes.js";
import { Patrocinador_Monstruo } from "../models/patrocinadores_Monstruos.js";

// GET
const encontrar_Patrocinadores = async (req, res) => {
    try{
        const Patrocinadores = await Patrocinador.findAll();
        res.json(Patrocinadores)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// GET
const encontrar_Patrocinadores_Heroe = async (req, res) => {
    try{
        const  { id_heroe } = req.params;
        const [checkHeroe, metadata2] = await db.query(`SELECT nombreHeroe FROM Heroes WHERE id_heroe = ${id_heroe}`);
        if(!checkHeroe[0]){
            res.json({mensaje: `El heroe con id_heroe = ${id_heroe} no existe`})
        } else {
            const [Patrocinadores, metadata] = await db.query(`SELECT id_patrocinador FROM Patrocinadores_Heroes WHERE id_heroe = ${id_heroe}`);
            res.json(Patrocinadores)
        } 
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// POST
const guardar_Patrocinador = async (req, res) => {
    //const {nombrePatrocinador, tipo} = req.body.datosPatrocinador;
    const {nombrePatrocinador, tipo} = req.body;


    const existePatrocinador = await Patrocinador.findOne(({ where: { nombrePatrocinador: nombrePatrocinador, tipo: tipo } }));

    if (existePatrocinador){
        const error = new Error("El patrocinador que se quiere ingresar ya existe");
        return res.status(400).json({msg: error.message});
    }
    
    try {
        const nuevoPatrocinador = await Patrocinador.create({
            nombrePatrocinador,
            tipo
        });
        res.json(nuevoPatrocinador);

    } catch (error) {
        console.log(error);
    }
};

// POST
const guardar_Patrocinio_Heroe = async (req, res) => {
    const {id_patrocinador, id_heroe} = req.body;
    try {
        const nuevoPatrocinio = await Patrocinador_Heroe.create({
            id_patrocinador,
            id_heroe
        });
        res.json(nuevoPatrocinio);
    } catch (error){
        console.log(error);
    }
};

// POST
const guardar_Patrocinio_Monstruo = async (req, res) => {
    const {id_patrocinador, id_monstruo} = req.body;
    try {
        const nuevoPatrocinio = await Patrocinador_Monstruo.create({
            id_patrocinador,
            id_monstruo
        });
        res.json(nuevoPatrocinio);
    } catch (error){
        console.log(error);
    }
};

// DELETE
const eliminar_Patrocinador = async (req, res) => {
    try {
        const { id_patrocinador } = req.params;
        await Patrocinador.destroy({
            where:{
                id_patrocinador,
            },
        });
        res.json({mensaje: 'El patrocinador ' + id_patrocinador+ ' se elimino con exito'})
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({mensaje: 'Para eliminar un patrocinador, el patrocinador debe existir. Revise el id, por favor'});
    }
};

// DELETE
const eliminar_Patrocinio_Heroe = async (req, res) => {
    try {
        const { id_patrocinio } = req.params;
        await Patrocinador_Heroe.destroy({
            where:{
                id_patrocinio,
            },
        });
        res.json({mensaje: 'El patrocinio ' + id_patrocinio+ ' se elimino con exito'})
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({mensaje: 'Para eliminar un patrocinio, el patrocinio debe existir. Revise el id, por favor'});
    }
};

// DELETE
const eliminar_Patrocinio_Monstruo = async (req, res) => {
    try {
        const { id_patrocinio } = req.params;
        await Patrocinador_Monstruo.destroy({
            where:{
                id_patrocinio,
            },
        });
        res.json({mensaje: 'El patrocinio ' + id_patrocinio+ ' se elimino con exito'})
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({mensaje: 'Para eliminar un patrocinio, el patrocinio debe existir. Revise el id, por favor'});
    }
};

export { encontrar_Patrocinadores, encontrar_Patrocinadores_Heroe, guardar_Patrocinador, guardar_Patrocinio_Heroe,
     guardar_Patrocinio_Monstruo, eliminar_Patrocinador, eliminar_Patrocinio_Heroe, eliminar_Patrocinio_Monstruo};