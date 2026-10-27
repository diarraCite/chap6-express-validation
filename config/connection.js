//Import le module de l'ORM
import { Sequelize } from "sequelize";
import dotenv from "dotenv"
// Nos variables d'environnement

const { DB_NAME, DB_USER, DB_PASSWORD, DB_DIALECT, DB_PORT,DB_HOST } = dotenv.config().parsed


const database = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD,{
    host:DB_HOST,
    dialect:DB_DIALECT,
    //port: DB_PORT
})

export default database