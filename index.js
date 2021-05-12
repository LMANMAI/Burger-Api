const express = require("express");
const cors = require("cors");
const dbConnection = require("./config/db");
require("dotenv").config();

const app = express();
dbConnection();
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.options("*", cors());
app.use(express.json({ extended: true }));

const port = process.env.PORT || 4000;

app.use(function (req, res, next) {
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

app.listen(port, "0.0.0.0", () => {
  console.log(`Corriendo desde el puerto: ${port}`);
});
