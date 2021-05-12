const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const burgerController = require("../controllers/burgerController");

router.post(
  "/",
  [check("name", "El Nombre es necesario").not().isEmpty()],
  burgerController.insertBurger
);
router.get("/", burgerController.getBurgers);
router.get("/:name", burgerController.getBurger);
router.get("/ingredient/:ingredient", burgerController.getBurgersByIngredient);

module.exports = router;
