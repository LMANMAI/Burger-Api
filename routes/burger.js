const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const burgerController = require("../controllers/burgerController");

router.post(
  "/",
  [check("name", "El Nombre es necesario").not().isEmpty()],
  burgerController.create
);
router.get("/", burgerController.getAll);
router.get("/:burgerID", burgerController.getByID);

module.exports = router;
