import { Heroe } from "../models/heroes.js";

//GET
const encontrar_Heroes = async (req, res) => {
    try{
        const heroes = await Heroe.findAll();
        res.json(heroes)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

//POST
const guardar_Heroe = async (req, res) => {
    //const {nombreHeroe, rango, habilidad, lugarResidencia, telefono} = req.body.datosHeroe;
    const {nombreHeroe, rango, habilidad, lugarResidencia, telefono} = req.body;


    const existeHeroe = await Heroe.findOne(({ where: { nombreHeroe : nombreHeroe,
        rango: rango, habilidad: habilidad, lugarResidencia: lugarResidencia, telefono: telefono } }));

    if (existeHeroe){
        const error = new Error("El heroe que se quiere ingresar ya existe");
        return res.status(400).json({msg: error.message});
    }
    
    try {
        const nuevoHeroe = await Heroe.create({
            nombreHeroe,
            rango,
            habilidad,
            lugarResidencia,
            telefono
        });
        res.json(nuevoHeroe);

    } catch (error) {
        console.log(error);
    }
};

// UPDATE
const actualizar_Heroe = async (req, res) => {
    const {id_heroe} = req.params;
    //const {invitadoSaitama} = req.body.actualizarInvitacion;
    const {invitadoSaitama} = req.body;


    try {
        const actualizacion = await Heroe.update({
            invitadoSaitama: invitadoSaitama
        }, 
        {
            where: {id_heroe: id_heroe}
        });
        res.json(actualizacion);

    } catch (error) {
        console.log(error);
    }
}

// DELETE
const eliminar_Heroe = async (req, res) => {
    try {
        const { id_heroe } = req.params;
        await Heroe.destroy({
            where:{
                id_heroe,
            },
        });
        res.json({mensaje: 'El heroe ' + id_heroe+ ' se elimino con exito'})
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({mensaje: 'Para eliminar un heroe, el heroe debe existir. Revise el id, por favor'});
    }
};

export { encontrar_Heroes, guardar_Heroe, actualizar_Heroe, eliminar_Heroe};