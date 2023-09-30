const Goal = require("../models/Goal.model");

async function createNewGoal(goalData) {
  try {
    const goal = await new Goal(goalData);
    const newGoal = await goal.save();
    return newGoal;
  } catch (error) {
    throw new error();
  }
}

const exerciseGoal5 = {
  name: "High-Intensity Interval Training",
  description: "Short but intense workouts",
  targetDate: new Date("2023-10-25"),
  targetCalories: 500,
  status: "Abandoned",
};

//createNewGoal(exerciseGoal5);

async function readAllGoals() {
  try {
    const goals = await Goal.find();
    console.log(goals);
    return goals;
  } catch (error) {
    throw new error();
  }
}

//readAllGoals();

async function deleteAGoal(goalId) {
  try {
    const deletedGoal = await Goal.findByIdAndDelete(goalId);
    return deletedGoal;
  } catch (error) {
    throw new error();
  }
}

deleteAGoal("6517c79d43c15bac5f5f76f3");

module.exports = {
  createNewGoal,
  readAllGoals,
  deleteAGoal,
};
