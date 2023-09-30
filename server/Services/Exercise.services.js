const Exercise = require("../models/Exercise.model");

async function addNewExercise(exerciseData) {
  try {
    const exercise = new Exercise(exerciseData);
    const newExercise = await exercise.save();
    console.log(newExercise);
  } catch (error) {
    console.log("New Error occurred", error);
  }
}

const exerciseToAdd = {
  name: "plank",
  durationInMinutes: 2,
};

async function readAllExercises() {
  try {
    const exercises = await Exercise.find();
    console.log(exercises);
  } catch (error) {
    console.log("New Error occurred", error);
  }
}

async function deleteAnExercise(exerciseId) {
  try {
    const deletedExercise = await Exercise.findByIdAndDelete(exerciseId);
    console.log(deletedExercise);
  } catch (error) {
    console.log("New error", error);
  }
}
//deleteAnExercise("6517b7691ecf39b01e225916");

module.exports = { addNewExercise, readAllExercises, deleteAnExercise };
