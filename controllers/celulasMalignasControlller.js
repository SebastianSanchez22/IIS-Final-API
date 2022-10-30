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

export { encontrar_Celulas_Malignas, guardar_Celula_Maligna, eliminar_Celula_Maligna};