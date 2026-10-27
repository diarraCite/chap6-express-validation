//Importer les modeles sans relations

import User from "./User.js";
import Department from "./Department.js";
import Role from "./Role.js";
//Ajouter les relations

Department.hasMany(User)
User.belongsTo(Department)

Role.belongsToMany(User, { through: "RoleUser" })
User.belongsToMany(Role, { through: "RoleUser" })

export { Department, User, Role }