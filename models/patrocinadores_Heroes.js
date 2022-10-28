import Sequelize from "sequelize";
import db from "../configuracion/db.js";
import { Heroe } from "./heroes.js";
import { Patrocinador } from "./patrocinadores.js";

export const Patrocinador_Heroe = db.define('patrocinadores_heroes', {
    id_patrocinador: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_heroe: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }})

    Patrocinador.hasMany(Patrocinador_Heroe);
    Heroe.hasMany(Patrocinador_Heroe);

    Patrocinador_Heroe.belongsTo(Patrocinador, {foreignKey: "id_patrocinador"});
    Patrocinador_Heroe.belongsTo(Heroe, {foreignKey: "id_heroe"});