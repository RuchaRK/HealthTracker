const express = require("express");

const goalRouter = express.Router();

const {
  createNewGoal,
  readAllGoals,
  deleteAGoal,
} = require("../Services/Goal.services");

goalRouter.get("/", async (req, res) => {
  try {
    const allGoals = await readAllGoals();
    return res.status(200).json({ message: "Success", allGoals });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

goalRouter.post("/", async (req, res) => {
  try {
    const objToInsert = req.body;
    const insertedObj = await createNewGoal(objToInsert);
    return res.status(200).json({ message: "Success", insertedObj });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

goalRouter.delete("/:goalId", async (req, res) => {
  try {
    const { goalId } = req.params;
    const deletedData = await deleteAGoal(goalId);
    return res.status(200).json({ message: "Success", deletedData });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

module.exports = goalRouter;
