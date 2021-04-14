const BurgerModel = require('../models/Burger');
const { validationResult } = require('express-validator');

function verificarErrores(req, res) {
    //reviso si tengo errores de validacion
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({ errores: errores.array() });
    }
}
exports.insertBurger = async (req, res) => {
    verificarErrores(req, res);
 try {
     let burger = new BurgerModel(req.body);
     await burger.save();
     res.status(200).json({burger});
     
 } catch (error) {
     res.status(500).json({msg: 'Ocurrio un problema agregando la hamburgesa'});
     console.log(error.response);
 }
}
exports.getBurgers = async (req, res) => {
    verificarErrores(req, res)
try {
    let burgers = await BurgerModel.find();
    res.status(200).json({ burgers });
    
} catch (error) {
    res.staus(500).json({msg: 'Hubo un problema al traer las hamburgesas'})
    console.log(error.response);
}
}
exports.getBurger = async (req, res) => {
    verificarErrores(req, res);
    try {
        //console.log(req.params)
        let burger = await BurgerModel.findOne(req.params);
        res.status(200).json({ burger })
        //console.log(hamburgesa)
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un problema al traer la hamburgesa'})
        console.log(error.response)
    }
}
