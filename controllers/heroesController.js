import db from "../configuracion/db.js";
import { Heroe } from "../models/heroes.js";

//GET
const encontrar_Heroes = async (req, res) => {
    try{
        const [heroes, metadata] = await db.query("SELECT * FROM heroes");
        res.json(heroes)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// GET
const top10Heroes = async (req, res) => {
    try {
        // COMPLETAR
        const [topS, metadata]= await db.query("SELECT * FROM heroes WHERE rango = 'S' LIMIT 10");
        if(topS.length == 10){
            res.json(topS)
        } else {
            const newLimit = 10 - topS.length;
            const [topA, metadata2] = await db.query(`SELECT * FROM heroes WHERE rango = 'A' LIMIT ${newLimit}`);
            if((topS.length + topA.length) == 10){
                res.json({topS, topA});
            } else {
                const newLimit2 = 10 - (topS.length - topA.length);
                const [topB, metadata3] = await db.query(`SELECT * FROM heroes WHERE rango = 'B' LIMIT ${newLimit2}`);
                if((topS.length+(topA.length+topB.length)) == 10){
                    res.json({topS, topA, topB});
                }
            }
        }
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

// UPDATE (PATCH)
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
        actualizacion;
        const heroeActualizado = await db.query(`SELECT * FROM heroes WHERE id_heroe = ${id_heroe}`)
        res.json(heroeActualizado);

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

export { encontrar_Heroes, top10Heroes, guardar_Heroe, actualizar_Heroe, eliminar_Heroe};