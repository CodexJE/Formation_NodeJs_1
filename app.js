const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const carRoutes =require("./routes/car");

app.use(bodyParser());

mongoose.connect(
  "mongodb://127.0.0.1:27017/codexformation",
  {
    useNewUrlParser: true,
  },
  (error) => {
    console.log(error);
  }
);

app.use("/user", userRoutes);
app.use("/car", carRoutes);

app.use("/", (req, res) => {
  return res.status(200).json({ test: "test" });
});

module.exports = app;
