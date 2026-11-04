import jwt from "jsonwebtoken"
const verifyToken = (req, res, next) => {
    //Recuperation du token dans les headers de la requete
    const bearerToken = req.headers['authorization']
    if (!bearerToken) {
        return res.status(401).json({ message: "Accès refusé, token manquant" })
    }
    const token = bearerToken.split(' ')[1]
    //console.log("Token reçu :", token, bearerToken) // Affiche le token reçu pour le débogage
    try {
        //Verification de la validité du token
        const decodedValue = jwt.verify(token, process.env.CODE_SECRET,(err, decoded) => {
            if (err) {
                return res.status(401).json({ message: err.message })
            }
            req.user = decoded  
            next()
        })
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}

export default verifyToken