const Goal = require("../models/Goal.model");

async function createNewGoal(goalData) {
  try {
    const goal = new Goal(goalData);
    const newGoal = await goal.save();
    return newGoal;
  } catch (error) {
    throw new Error(error);
  }
}

async function readAllGoals() {
  try {
    const goals = await Goal.find();
    return goals;
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteAGoal(goalId) {
  try {
    const deletedGoal = await Goal.findByIdAndDelete(goalId);
    return deletedGoal;
  } catch (error) {
    throw new error();
  }
}

module.exports = {
  createNewGoal,
  readAllGoals,
  deleteAGoal,
};
