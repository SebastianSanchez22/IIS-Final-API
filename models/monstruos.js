import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Monstruo = db.define('Monstruos', {
    id_monstruo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreMonstruo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nivelAmenaza: {
        type: Sequelize.STRING,
        allowNull: false
    }})