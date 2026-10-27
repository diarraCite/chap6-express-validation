//Importer les fonctions des elements 
import { body, param } from "express-validator"

const departmentValidationRules = [
    
    body("nom").notEmpty().withMessage("Le nom ne peut pas etre vide"),
    body("description").optional().isLength({ min: 20 }).withMessage("Il faut au moins 20 caracteres"),
    body("image").optional().isLength({min:10}).withMessage("L'image pas correcte"),
    //Uniquement pour la mise a mise ajour
    param("id").optional().isInt({gt:0}).withMessage("L'id doit etre un entier positif")

]

export default departmentValidationRules