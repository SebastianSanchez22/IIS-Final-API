import { Monstruo } from "../models/monstruos.js";

// GET
const encontrar_Monstruos = async (req, res) => {
    try{
        const Monstruos = await Monstruo.findAll();
        res.json(Monstruos)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// POST
const guardar_Monstruo = async (req, res) => {
    //const {id_celula, nombreMonstruo, nivelAmenaza} = req.body.datosMonstruo;
    const {id_celula, nombreMonstruo, nivelAmenaza} = req.body;


    const existeMonstruo = await Monstruo.findOne(({ where: { id_celula : id_celula,
        nombreMonstruo: nombreMonstruo, nivelAmenaza: nivelAmenaza } }));

    if (existeMonstruo){
        const error = new Error("El Monstruo que se quiere ingresar ya existe");
        return res.status(400).json({msg: error.message});
    }
    
    try {
        const nuevoMonstruo = await Monstruo.create({
            id_celula,
            nombreMonstruo,
            nivelAmenaza
        });
        res.json(nuevoMonstruo);

    } catch (error) {
        console.log(error);
    }
};

// DELETE
const eliminar_Monstruo = async (req, res) => {
    try {
        const { id_monstruo } = req.params;
        await Monstruo.destroy({
            where:{
                id_monstruo,
            },
        });
        res.json({mensaje: 'El monstruo ' + id_monstruo+ ' se elimino con exito'})
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({mensaje: 'Para eliminar un monstruo, el monstruo debe existir. Revise el id, por favor'});
    }
};

export { encontrar_Monstruos, guardar_Monstruo, eliminar_Monstruo};