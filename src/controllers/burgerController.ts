import BurgerModel from "../models/Burger";
const { validationResult } = require("express-validator");
import { Request, Response } from "express";

function checkError(req: any, res: any) {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
}

exports.create = async (req: Request, res: Response) => {
  checkError(req, res);
  try {
    let burger = new BurgerModel(req.body);
    await burger.save();
    res.status(200).json({ burger });
  } catch (error: any) {
    res
      .status(500)
      .json({ msg: "Ocurrio un problema agregando la hamburgesa" });
    console.log(error.response);
  }
};

exports.getAll = async (req: Request, res: Response) => {
  checkError(req, res);
  try {
    let burgers = await BurgerModel.find();
    res.status(200).json({ burgers });
  } catch (error: any) {
    res
      .status(500)
      .json({ msg: "Hubo un problema al traer las hamburgesas", error });
    console.log(error.response);
  }
};

exports.getByID = async (req: Request, res: Response) => {
  checkError(req, res);
  try {
    let burger = await BurgerModel.findById(req.params.burgerID);
    console.log(req.params.burgerID);
    res.status(200).json({ burger });
  } catch (error: any) {
    res.status(500).json({ msg: "Hubo un problema al traer la hamburgesa" });
    console.log(error.response);
  }
};
