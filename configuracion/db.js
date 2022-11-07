import Sequelize from "sequelize";

const db = new Sequelize( 'finalapi', 'root', 'SSJPM', {
    host: '34.67.97.23',
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5, 
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
} );

export default db;