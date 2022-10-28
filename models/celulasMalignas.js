import Sequelize from "sequelize";
import db from "../configuracion/db.js";
import { Monstruo } from "./monstruos.js";

export const celulaMaligna = db.define('celulasmalignas', {
    id_celula: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_monstruo: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nombreCelula: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rangoLetalidad: {
        type: Sequelize.STRING,
        allowNull: false
    }})

Monstruo.hasOne(celulaMaligna);
celulaMaligna.belongsTo(Monstruo);