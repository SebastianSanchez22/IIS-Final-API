import { Partido } from "../models/partidos.js";

// GET
const encontrar_Partidos = async (req, res) => {
    try{
        const Partidos = await Partido.findAll();
        res.json(Partidos)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// POST
const guardar_Partido = async (req, res) => {
    //const {nombrePatrocinador, tipo} = req.body.datosPatrocinador;
    const {nombrePartido} = req.body;


    const existePartido = await Partido.findOne(({ where: { nombrePartido: nombrePartido} }));

    if (existePartido){
        const error = new Error("El partido que se quiere ingresar ya existe");
        return res.status(400).json({msg: error.message});
    }
    
    try {
        const nuevoPartido = await Partido.create({
            nombrePartido
        });
        res.json(nuevoPartido);

    } catch (error) {
        console.log(error);
    }
};

// DELETE
const eliminar_Partido = async (req, res) => {
    try {
        const { id_partido } = req.params;
        await Partido.destroy({
            where:{
                id_partido,
            },
        });
        res.json({mensaje: 'El partido ' + id_partido+ ' se elimino con exito'})
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({mensaje: 'Para eliminar un partido, el partido debe existir. Revise el id, por favor'});
    }
};

export { encontrar_Partidos, guardar_Partido, eliminar_Partido};