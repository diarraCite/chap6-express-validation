import { Router } from "express";
import { DepartmentList, DepartmentById, addDepartment, deleteDepartment, updateDepartment, departmentUsers } from "../controllers/departmentController.js";
import departmentValidationRules from "../validations/departmentValidate.js";
const departmentRoute = Router()

departmentRoute
    .get("/", DepartmentList)
    .get("/:id", DepartmentById)
    .post("/", departmentValidationRules, addDepartment)
    .delete("/:id", deleteDepartment)
    .put("/:id", departmentValidationRules, updateDepartment)

    //Une route de relation
    .get("/:id/users", departmentUsers)


export default departmentRoute