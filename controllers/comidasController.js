import { Comida } from "../models/comidas.js";
// GET
const encontrar_Comidas = async (req, res) => {
    try{
        const Comidas = await Comida.findAll();
        res.json(Comidas)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// POST
const guardar_Comida = async (req, res) => {
    //const {nombrePatrocinador, tipo} = req.body.datosPatrocinador;
    const {nombreComida} = req.body;


    const existeComida = await Comida.findOne(({ where: { nombreComida: nombreComida} }));

    if (existeComida){
        const error = new Error("La comida que se quiere ingresar ya existe");
        return res.status(400).json({msg: error.message});
    }
    
    try {
        const nuevoComida = await Comida.create({
            nombreComida
        });
        res.json(nuevoComida);

    } catch (error) {
        console.log(error);
    }
};

// DELETE
const eliminar_Comida = async (req, res) => {
    try {
        const { id_comida } = req.params;
        await Comida.destroy({
            where:{
                id_comida,
            },
        });
        res.json({mensaje: 'La comida ' +id_comida+ ' se elimino con exito'})
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({mensaje: 'Para eliminar una comida, la comida debe existir. Revise el id, por favor'});
    }
};

export { encontrar_Comidas, guardar_Comida, eliminar_Comida};