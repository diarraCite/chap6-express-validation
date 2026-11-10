import { Router } from "express";
import { DepartmentList, DepartmentById, addDepartment, deleteDepartment, updateDepartment, departmentUsers } from "../controllers/departmentController.js";
import departmentValidationRules from "../validations/departmentValidate.js";
import verifyToken from "../auth/verifyToken.js";
const departmentRoute = Router()

departmentRoute
    .get("/",verifyToken, DepartmentList)
    .get("/:id",verifyToken, DepartmentById)
    .post("/", departmentValidationRules, addDepartment)
    .delete("/:id", deleteDepartment)
    .put("/:id", departmentValidationRules, updateDepartment)

    //Une route de relation
    .get("/:id/users", departmentUsers)


export default departmentRoute