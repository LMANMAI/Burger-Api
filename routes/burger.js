const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const burgerController = require("../controllers/burgerController");
//Endpoint
// api/burger

//Insertar una hamburgesa
router.post(
  "/",
  [check("name", "El Nombre es necesario").not().isEmpty()],
  burgerController.insertBurger
);
//traer hamburgesas
router.get('/burgers', burgerController.getBurgers);

//traer hamburgesa
router.get('/:name', burgerController.getBurger);


module.exports = router;
