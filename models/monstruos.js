import Sequelize from "sequelize";
import db from "../configuracion/db.js";
import { celulaMaligna } from "./celulasMalignas.js";

export const Monstruo = db.define('monstruos', {
    id_monstruo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_celula: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombreMonstruo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nivelAmenaza: {
        type: Sequelize.STRING,
        allowNull: false
    }
    })

celulaMaligna.hasOne(Monstruo);
Monstruo.belongsTo(celulaMaligna, {foreignKey: "id_celula"} );