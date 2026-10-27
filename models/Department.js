import { DataTypes } from "sequelize";
import database from "../config/connection.js";

//Creation d'une table

const Department = database.define("Department", {
    nom: { type: DataTypes.STRING, allowNull: false, unique:{name:"nom", msg:"Le nom doit etre unique"} },
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
},{
    timestamps:false
})

export default Department