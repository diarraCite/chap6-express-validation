import express from "express"
import helmet from "helmet"
import cors from "cors"
import compression from "compression"
import { configDotenv } from "dotenv";

//importer les modeles pour creer les tables
import { User, Department, Role } from "./models/relation.js"
import database from "./config/connection.js";
import { DepartmentById, DepartmentList } from "./controllers/departmentController.js";
import departmentRoute from "./routes/departmentRoute.js";
import userRoute from "./routes/userRoute.js";


const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.json())

try {
    //await database.sync({ alter: true }) //Mise a jour
} catch (error) {
    console.log(error)
}
//app.get("/api/departments", DepartmentList)
//app.get("/api/departments/:id", DepartmentById)

app.use("/api/departments", departmentRoute)
app.use("/api/users", userRoute)

const PORT = 5000

app.listen(PORT, () => console.log(`Le serveur tourne sur le port ${PORT}`))