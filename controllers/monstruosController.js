import db from "../configuracion/db.js";
import { celulaMaligna } from "../models/celulasMalignas.js";
import { Monstruo } from "../models/monstruos.js";

// GET
const encontrar_Monstruos = async (req, res) => {
    try{
        const [Monstruos, metadata3] = await db.query(`SELECT * FROM monstruos`)
        res.json(Monstruos)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// GET
const retornar_Datos_Monstruo = async (req, res) => {
    try {
        const  {id_monstruo} = req.params;
        const [datosMonstruo, metadata] = await db.query(`SELECT nombreMonstruo,nivelAmenaza FROM monstruos WHERE id_monstruo = ${id_monstruo}`);
        const [datosBatalla_Monstruo, metadata2] = await db.query(`SELECT h.nombreHeroe,b.resultado FROM heroes h INNER JOIN batallas b ON h.id_heroe=h.id_heroe WHERE id_monstruo=${id_monstruo}`);
        const totalInfoMonstruo = datosMonstruo.concat(datosBatalla_Monstruo);
        res.json(totalInfoMonstruo);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

// POST
const guardar_Monstruo = async (req, res) => {
    //const {id_celula, nombreMonstruo, nivelAmenaza} = req.body.datosMonstruo;
    const {id_celula, nombreMonstruo, nivelAmenaza} = req.body;

    const [existeMonstruo, metadata] = await db.query(`SELECT * FROM monstruos WHERE id_celula = ${id_celula} AND
     nombreMonstruo = "${nombreMonstruo}" AND nivelAmenaza = "${nivelAmenaza}"`);

    const [existeCelula, metadata2] = await db.query(`SELECT * FROM celulasmalignas WHERE id_celula = ${id_celula}`);

    if (existeMonstruo[0]){
        const error = new Error("El Monstruo que se quiere ingresar ya existe");
        return res.status(400).json({msg: error.message});
    }

    if (!existeCelula[0]){
        const error = new Error("La celula con la que se quiere relacionar el monstruo no existe")
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
        const [monstruoAEliminar, metadata4] = await db.query(`DELETE FROM monstruos WHERE id_monstruo = ${id_monstruo}`)
        monstruoAEliminar;
        res.json({mensaje: 'El monstruo ' + id_monstruo+ ' se elimino con exito'})
    } catch (error) {
        return res.status(500).json({mensaje: 'Para eliminar un monstruo, el monstruo debe existir. Revise el id, por favor'});
        
    }
};

export { encontrar_Monstruos, retornar_Datos_Monstruo, guardar_Monstruo, eliminar_Monstruo};