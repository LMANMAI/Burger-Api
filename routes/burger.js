const express = require('express');
const router = express.Router();
const burgerController = require('../controllers/burgerController');
//Endpoint
// api/burger
router.post('/', burgerController.insertBurger);

module.exports = router;