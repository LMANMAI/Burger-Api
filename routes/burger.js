const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const burgerController = require("../controllers/burgerController");
//Endpoint
// api/burger

router.post(
  "/",
  [check("name", "El Nombre es necesario").not().isEmpty()],
  burgerController.insertBurger
);
router.get("/", burgerController.getBurgers);
router.get("/:name", burgerController.getBurger);
//esto tiene que ir en otra ruta
router.get("/ingredient/:topping", burgerController.getBurgersByIngredient);

module.exports = router;
