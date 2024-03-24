import mongoose from "mongoose";
require("dotenv").config({ path: ".env" });

export const DataBaseConnection = async () => {
  try {
    if (!process.env.DB_URL) {
      throw new Error("DB environment variable is not defined.");
    }

    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected database");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};
