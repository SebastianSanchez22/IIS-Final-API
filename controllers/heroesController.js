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

//GET
const retornar_Datos_Heroe = async (req, res) => {
    try {
        const { id_heroe } = req.params;
        const [datosHeroe, metadata] = await db.query(`SELECT nombreHeroe,rango,habilidad,lugarResidencia,telefono FROM heroes WHERE heroes.id_heroe = ${id_heroe}`);
        const [datosBatalla_Heroe, metadata2] = await db.query(`SELECT M.nombreMonstruo,b.resultado FROM monstruos m INNER JOIN batallas b ON m.id_monstruo=b.id_monstruo WHERE b.id_heroe=${id_heroe}`);
        const [datosPatrocinador_Heroe, metadata3] = await db.query(`SELECT p.nombrePatrocinador FROM patrocinadores p INNER JOIN patrocinadores_heroes h ON p.id_patrocinador=h.id_patrocinador WHERE h.id_heroe=${id_heroe}`);
        const totalInfoHeroe = datosHeroe.concat(datosBatalla_Heroe,datosPatrocinador_Heroe);
        res.json(totalInfoHeroe);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// GET
const top10Heroes = async (req, res) => {
    try {
        // COMPLETAR
        const [topS, metadata]= await db.query("SELECT * FROM heroes WHERE rango = 'S' LIMIT 10");
        let top10 = topS;
        if(top10.length == 10){
            res.json(top10);
        } else {
            const newLimit = 10 - topS.length;
            const [topA, metadata2] = await db.query(`SELECT * FROM heroes WHERE rango = 'A' LIMIT ${newLimit}`);
            top10 = topS.concat(topA);
            if(top10.length == 10){
                res.json(top10);
            } else {
                const newLimit2 = 10 - (topS.length - topA.length);
                const [topB, metadata3] = await db.query(`SELECT * FROM heroes WHERE rango = 'B' LIMIT ${newLimit2}`);
                top10 = topS.concat(topA, topB);
                if(top10.length == 10){
                    res.json(top10);
                } else {
                    const newLimit3 = 10 - (topS.length - (topA.length- topB.length));
                    const [topC, metadata3] = await db.query(`SELECT * FROM heroes WHERE rango = 'C' LIMIT ${newLimit3}`);
                    top10 = topS.concat(topA, topB, topC);
                    res.json(top10);
                }
            }
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// GET
const invitadosCasaSaitama = async (req,res) => {
    try{
        const [invitados, metadata] = await db.query("SELECT nombreHeroe FROM heroes where invitadoSaitama = 'SI'");
        res.json(invitados)
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

export { encontrar_Heroes, retornar_Datos_Heroe, top10Heroes, invitadosCasaSaitama, guardar_Heroe, actualizar_Heroe, eliminar_Heroe};