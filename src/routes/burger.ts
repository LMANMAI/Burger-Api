import express from "express";
const router = express.Router();
const { check } = require("express-validator");
const authenticateApiKey = require("../middleware/authenticateApiKey");
const burgerController = require("../controllers/burgerController");

router.post(
  "/",
  [check("name", "El Nombre es necesario").not().isEmpty()],
  burgerController.create
);
router.get("/", authenticateApiKey, burgerController.getAll);
router.get("/:burgerID", burgerController.getByID);

export default router;
