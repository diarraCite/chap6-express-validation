import { User } from "../models/relation.js"

const autorise = (roles) => async(req, res, next) => {
    //roles=['admin', 'editor']
    const id = req.user.id
    if (!id) {
        return res.status(401).json({ message: "Accès refusé, utilisateur non authentifié" })
    }
    const user = await User.findByPk(id)
    try {
        const userRoles = await user.getRoles()
        const roleNames=userRoles.map(role => role.titre)

        const hasRole = roles.some(role => roleNames.includes(role))
        if (!hasRole) {
            return res.status(403).json({ message: "Accès refusé, rôle insuffisant" })
        }
        next()
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export default autorise
