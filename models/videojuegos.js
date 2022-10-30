import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Videojuego = db.define('videojuegos', {
    id_videojuego: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreVideojuego: {
        type: Sequelize.STRING,
        allowNull: false
    }})