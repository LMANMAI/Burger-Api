const BurgerModel = require("../models/Burger");
const { validationResult } = require("express-validator");

function checkError(req, res) {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
}
exports.create = async (req, res) => {
  checkError(req, res);
  try {
    let burger = new BurgerModel(req.body);
    await burger.save();
    res.status(200).json({ burger });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Ocurrio un problema agregando la hamburgesa" });
    console.log(error.response);
  }
};
exports.getAll = async (req, res) => {
  checkError(req, res);
  try {
    let burgers = await BurgerModel.find();
    res.status(200).json({ burgers });
  } catch (error) {
    res.staus(500).json({ msg: "Hubo un problema al traer las hamburgesas" });
    console.log(error.response);
  }
};
exports.getByID = async (req, res) => {
  checkError(req, res);
  try {
    let burger = await BurgerModel.findById(req.params.burgerID);
    console.log(req.params.burgerID)
    res.status(200).json({ burger });
  } catch (error) {
    res.status(500).json({ msg: "Hubo un problema al traer la hamburgesa" });
    console.log(error.response);
  }
};
