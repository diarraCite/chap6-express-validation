import { validationResult } from "express-validator"
import { Department } from "../models/relation.js"

//Liste des departements
export const DepartmentList = async (req, res) => {
    try {
        const data = await Department.findAll()
        res.status(200).json({ data })
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }

}

//Ajout d'un department

export const addDepartment = async (req, res) => {
    //Recevoir les donnees depuis un formulaires
    const department = req.body

    const errors = validationResult(req)

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    try {
        const result = await Department.create(department)
        res.status(201).json({ data: result, message: "Departement cree avec succes" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
//Details d'un departement
export const DepartmentById = async (req, res) => {
    const { id } = req.params
    try {
        const department = await Department.findByPk(id)
        res.status(200).json({ data: department })

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//Mise a jour d'un departement
export const updateDepartment = async (req, res) => {
    const { id } = req.params

    //Les donnees 
    const data = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
    try {
        const result = await Department.update(data, { where: { id } })
        res.status(201).json({ message: "Mise a jour avec succes" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

//Suppression d'un departement

export const deleteDepartment = async (req, res) => {
    const { id } = req.params

    try {
        const result = await Department.destroy({ where: { id } })
        res.status(200).json({ result })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Route de relation

//Les utilisateurs d'un departement

export const departmentUsers = async (req, res) => {
    const { id } = req.params

    try {
        const department = await Department.findByPk(id)

        const users = await department.getUsers()
        res.status(200).json({ data: users })

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}