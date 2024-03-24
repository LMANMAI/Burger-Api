import mongoose, { Schema, Document } from "mongoose";

interface IBurger extends Document {
  name: string;
  ingredients: string[];
  image: string;
  calories: number;
  size: string;
  type: string;
}

const BurgerSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  ingredients: {
    type: [String],
    default: [],
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
});

const BurgerModel = mongoose.model<IBurger>("Burger", BurgerSchema);

export default BurgerModel;
