import { Patrocinador } from "../models/patrocinadores.js";

// GET
const encontrar_Patrocinadores = async (req, res) => {
    try{
        const Patrocinadores = await Patrocinador.findAll();
        res.json(Patrocinadores)
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

export { encontrar_Patrocinadores, guardar_Patrocinador, eliminar_Patrocinador};