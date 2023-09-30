const Exercise = require("../models/Exercise.model");

async function addNewExercise(exerciseData) {
  try {
    const exercise = new Exercise(exerciseData);
    const newExercise = await exercise.save();
    return newExercise;
  } catch (error) {
    throw new error();
  }
}

const exerciseToAdd = {
  name: "plank",
  durationInMinutes: 2,
};

async function readAllExercises() {
  try {
    const exercises = await Exercise.find();
    return exercises;
  } catch (error) {
    throw new error();
  }
}

async function deleteAnExercise(exerciseId) {
  try {
    const deletedExercise = await Exercise.findByIdAndDelete(exerciseId);
    return deletedExercise;
  } catch (error) {
    throw new error();
  }
}
//deleteAnExercise("6517b7691ecf39b01e225916");

module.exports = { addNewExercise, readAllExercises, deleteAnExercise };
