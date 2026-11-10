import { User } from "../models/relation.js"
import bcrypt from "bcryptjs"

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: "Department",
            attributes: {
                exclude: ["mdp"]
            }
        })
        // const modifUsers = users.map(user => {
        //     const { mdp, ...restUser } = user.toJSON()
        //     return restUser
        // })
        res.status(200).json({ data: users })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const addUser = async (req, res) => {
    // const user = req.body

    const { mdp, ...restUser } = req.body
    // console.log("mot de passe", req.body)
    const mdpHache = bcrypt.hashSync(mdp)
    const user = { ...restUser, mdp: mdpHache }
    try {
        await User.create(user)
        res.status(201).json({ message: "Utilisateur cree avec succes" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}