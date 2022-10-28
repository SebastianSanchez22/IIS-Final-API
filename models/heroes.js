import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Heroe = db.define('Heroes', {
    id_heroe: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreHeroe: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rango: {
        type: Sequelize.STRING,
        allowNull: false
    },
    habilidad: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lugarResidencia: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefono: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }})