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
    console.log(objToInsert);
    const insertedObj = await addNewExercise(objToInsert);
    const allExercises = await readAllExercises();
    return res
      .status(200)
      .json({ message: "Success", insertedObj, allExercises });
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
    const allExercises = await readAllExercises();
    return res
      .status(200)
      .json({ message: "Success", deletedData, allExercises });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

module.exports = exerciseRouter;
