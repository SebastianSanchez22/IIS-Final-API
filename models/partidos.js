import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Partido = db.define('partidos', {
    id_partido: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombrePartido: {
        type: Sequelize.STRING,
        allowNull: false
    }})