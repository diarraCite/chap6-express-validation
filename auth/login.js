import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { User } from "../models/relation.js"

const login = async (req, res) => {
    const { email, mdp } = req.body
    if (!email) return res.status(401).json({ message: "Email requis" })

    try {
        const user = await User.findOne({ where: { email } })

        if (!user) return res.status(401).json({ message: "Utilisateur non reconnu" })
        const mdpValid = bcrypt.compareSync(mdp, user.mdp)

        if (!mdpValid) return res.status(401).json({ message: "Email et/ou mot de passe incorrect" })
        //Mot de passe et email valid

        //Creation des informations a mettre dans le jeton
        let payload = { id: user.id, prenom: user.prenom }
        let token = jwt.sign(payload, process.env.CODE_SECRET)

        // const { mdp, ...restUser } = user.toJSON()
        res.status(200).json({ data: { user, token } })

    } catch (error) {
        res.status(200).json({ message: error.message })
    }


}

export default login