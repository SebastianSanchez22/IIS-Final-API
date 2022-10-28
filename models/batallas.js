import Sequelize from "sequelize";
import db from "../configuracion/db.js";
import { Heroe } from "./heroes.js";
import { Monstruo } from "./monstruos.js";

export const Batalla = db.define('Batallas', {
    id_heroe: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    id_monstruo: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }})

    Heroe.hasMany(Batalla);
    Monstruo.hasMany(Batalla);

    Batalla.belongsTo(Heroe, {foreignKey: "id_heroe"});

    Batalla.belongsTo(Monstruo, {foreignKey: "id_monstruo"});