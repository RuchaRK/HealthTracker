const express = require("express");
require("dotenv").config();
require("./db");

const PORT = process.env.PORT || 3001;

const app = express();

const exerciseRouter = require("./Controller/Exercise.controller");

const foodRouter = require("./Controller/Food.controller");

const goalRouter = require("./Controller/Goal.controller");

app.use(express.json());

app.use("/api/exercises", exerciseRouter);

app.use("/api/food", foodRouter);

app.use("/api/goals", goalRouter);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
