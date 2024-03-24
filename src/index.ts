import express, { Request, Response, Router } from "express";
const cors = require("cors");
import { DataBaseConnection } from "./config/db";
import burgerRoute from "./routes/burger";
require("dotenv").config();

const app = express();
DataBaseConnection();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
const healthCheckRouter: Router = express.Router();

healthCheckRouter.get("/", (req: Request, res: Response) => {
  res.send("Ruta de verificacion de funcionamiento, metodo GET funcionando");
});

app.use("/", healthCheckRouter);
app.use("/burger", burgerRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
