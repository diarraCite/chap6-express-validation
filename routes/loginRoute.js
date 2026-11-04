import { Router } from "express";
import login from "../auth/login.js";

const loginRoute =Router()

loginRoute.post("/", login)

export default loginRoute