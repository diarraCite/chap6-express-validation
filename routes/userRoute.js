import { Router } from "express";
import { addUser, getAllUsers } from "../controllers/userController.js";


const userRoute = Router()

userRoute
    .get("/", getAllUsers)
    .post("/", addUser)

export default userRoute