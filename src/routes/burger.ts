import express from "express";
const router = express.Router();
const { check } = require("express-validator");
import { authenticateApiKey } from "../middleware/authenticateApiKey";
const burgerController = require("../controllers/burgerController");

router.post(
  "/",
  authenticateApiKey,
  [check("name", "El Nombre es necesario").not().isEmpty()],
  burgerController.create
);
router.get("/", authenticateApiKey, burgerController.getAll);
router.get("/:burgerID", authenticateApiKey, burgerController.getByID);
router.get(
  "/ingredient/:ingredient",
  authenticateApiKey,
  burgerController.getByIngredient
);

export default router;
