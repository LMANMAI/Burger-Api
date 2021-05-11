const mongoose = require("mongoose");

const BurgerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: [],
  image: {
    type: String,
    required: true,
    trim: true,
  },
  calories: {
    type: Number,
    trim: true,
    required: true,
  },
  size: {
    type: String,
    trim: true,
    required: true,
  },
  type: {
    type: String,
    trim: true,
    required: true,
  },
});
module.exports = mongoose.model("Burger", BurgerSchema);
