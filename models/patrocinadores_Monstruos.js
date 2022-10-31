import Sequelize from "sequelize";
import db from "../configuracion/db.js";
import { Monstruo } from "./monstruos.js";
import { Patrocinador } from "./patrocinadores.js";

export const Patrocinador_Monstruo = db.define('patrocinadores_monstruos', {
    id_patrocinio: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_patrocinador: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_monstruo: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }})

    Patrocinador.hasMany(Patrocinador_Monstruo);
    Monstruo.hasMany(Patrocinador_Monstruo);

    Patrocinador_Monstruo.belongsTo(Patrocinador, {foreignKey: "id_patrocinador"});
    Patrocinador_Monstruo.belongsTo(Monstruo, {foreignKey: "id_heroe"});