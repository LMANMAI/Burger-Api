import express from "express";
const cors = require("cors");
import { DataBaseConnection } from "./config/db";
import burgerRoute from "./routes/burger";
require("dotenv").config();

const app = express();
DataBaseConnection();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
// app.use("/", (req, res) => {
//   res.send("Ruta de verificacion de funcionamiento, metodo GET funcionando");
// });
app.use("/burger", burgerRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
