const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const morgan = require("morgan");
require("dotenv").config()

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);
mongoose
  .connect(process.env.MONGO_URL)
  .then((db) => console.log("Connected to Mongo"))
  .catch((err) => console.log(err));

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });

// Routes
// Aquí van las rutas

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
