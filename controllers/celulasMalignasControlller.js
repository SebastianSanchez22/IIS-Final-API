import db from "../configuracion/db.js";
import { celulaMaligna } from "../models/celulasMalignas.js";

// GET
const encontrar_Celulas_Malignas = async (req, res) => {
    try{
        const celulasMalignas = await celulaMaligna.findAll();
        res.json(celulasMalignas)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// GET
const retornar_Datos_Celula_Maligna = async (req,res) => {
    try {
        const  {id_celula} = req.params;
        const [datosCelula, metadata] = await db.query(`SELECT nombreCelula, rangoLetalidad from celulasmalignas WHERE id_celula = ${id_celula}`);
        const [celulaMonstruo, metadata2] = await db.query(`SELECT M.nombreMonstruo FROM monstruos m INNER JOIN celulasmalignas c ON m.id_celula=c.id_celula WHERE m.id_celula=${id_celula}`); 
        const totalInfoMonstruo = datosCelula.concat(celulaMonstruo);
        res.json(totalInfoMonstruo);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// POST
const guardar_Celula_Maligna = async (req, res) => {
    //const {nombreCelula, rangoLetalidad} = req.body.datosCelulaMaligna;
    const {nombreCelula, rangoLetalidad} = req.body;

    const existeCelula = await celulaMaligna.findOne(({ where: { 
        nombreCelula: nombreCelula, rangoLetalidad: rangoLetalidad 
    } }));

    if (existeCelula){
        const error = new Error("La celula maligna que se quiere ingresar ya existe");
        return res.status(400).json({msg: error.message});
    }
    
    try {
        const nuevaCelula = await celulaMaligna.create({
            nombreCelula,
            rangoLetalidad
        });
        res.json(nuevaCelula);

    } catch (error) {
        console.log(error);
    }
};

// DELETE
const eliminar_Celula_Maligna = async (req, res) => {
    try {
        const { id_celula } = req.params;
        await celulaMaligna.destroy({
            where:{
                id_celula,
            },
        });
        res.json({mensaje: 'La celula ' + id_celula+ ' se elimino con exito'})
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({mensaje: 'Para eliminar una celula, la celula debe existir. Revise el id, por favor'});
    }
};

export { encontrar_Celulas_Malignas, retornar_Datos_Celula_Maligna, guardar_Celula_Maligna, eliminar_Celula_Maligna};