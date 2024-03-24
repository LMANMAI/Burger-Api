import express from "express";
const cors = require("cors");
import { DataBaseConnection } from "./config/db";

require("dotenv").config();

const app = express();
DataBaseConnection();
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.options("*", cors());
app.use(express.json());

const port = process.env.PORT || 4000;

app.use(function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With, Accept"
  );
  next();
});
app.use("/", require("./routes/burger"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
