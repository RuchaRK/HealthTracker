const express = require("express");

const exerciseRouter = express.Router();

const {
  addNewExercise,
  readAllExercises,
  deleteAnExercise,
} = require("../Services/Exercise.services");

exerciseRouter.get("/", async (req, res) => {
  try {
    const allExercises = await readAllExercises();
    return res.status(200).json({ message: "Success", allExercises });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

exerciseRouter.post("/", async (req, res) => {
  try {
    const objToInsert = req.body;
    const insertedObj = await addNewExercise(objToInsert);
    return res.status(200).json({ message: "Success", insertedObj });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

exerciseRouter.delete("/:exerciseId", async (req, res) => {
  try {
    const { exerciseId } = req.params;
    const deletedData = await deleteAnExercise(exerciseId);
    return res.status(200).json({ message: "Success", deletedData });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

module.exports = exerciseRouter;
