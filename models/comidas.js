import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Comida = db.define('comidas', {
    id_comida: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreComida: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }})