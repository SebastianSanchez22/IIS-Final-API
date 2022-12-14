import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const celulaMaligna = db.define('celulasmalignas', {
    id_celula: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreCelula: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rangoLetalidad: {
        type: Sequelize.STRING,
        allowNull: false
    }})