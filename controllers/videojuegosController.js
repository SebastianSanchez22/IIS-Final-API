import { Videojuego } from "../models/videojuegos.js";

// GET
const encontrar_Videojuegos = async (req, res) => {
    try{
        const Videojuegos = await Videojuego.findAll();
        res.json(Videojuegos)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// POST
const guardar_Videojuego = async (req, res) => {
    //const {nombrePatrocinador, tipo} = req.body.datosPatrocinador;
    const {nombreVideojuego} = req.body;


    const existeVideojuego = await Videojuego.findOne(({ where: { nombreVideojuego: nombreVideojuego} }));

    if (existeVideojuego){
        const error = new Error("El videojuego que se quiere ingresar ya existe");
        return res.status(400).json({msg: error.message});
    }
    
    try {
        const nuevoVideojuego = await Videojuego.create({
            nombreVideojuego
        });
        res.json(nuevoVideojuego);

    } catch (error) {
        console.log(error);
    }
};

// DELETE
const eliminar_Videojuego = async (req, res) => {
    try {
        const { id_videojuego } = req.params;
        await Videojuego.destroy({
            where:{
                id_videojuego,
            },
        });
        res.json({mensaje: 'El videojuego ' + id_videojuego+ ' se elimino con exito'})
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({mensaje: 'Para eliminar un videojuego, el videojuego debe existir. Revise el id, por favor'});
    }
};

export { encontrar_Videojuegos, guardar_Videojuego, eliminar_Videojuego};