import database from "../config/connection.js";
import { DataTypes } from "sequelize";

const User = database.define("User", {
    nom: { type: DataTypes.STRING, allowNull: false },
    prenom: { type: DataTypes.STRING, allowNull: false },
    naissance: { type: DataTypes.DATEONLY, allowNul: false },
    email: { type: DataTypes.STRING, allowNul: false, unique:true },
    mdp: { type: DataTypes.STRING, allowNul: false },
    photo: DataTypes.STRING
},{
    timestamps:false
})

export default User