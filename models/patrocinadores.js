import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Patrocinador = db.define('patrocinadores', {
    id_patrocinador: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombrePatrocinador: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    }})