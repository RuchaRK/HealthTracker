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

const exerciseGoal5 = {
  name: "Weight Loss Success",
  caloriesType: "Burned",
  description: "Lost 10 pounds through exercise and diet.",
  targetDate: "2023-09-15",
  targetCalories: 1500,
  status: "Achieved",
};

createNewGoal(exerciseGoal5);

async function readAllGoals() {
  try {
    const goals = await Goal.find();
    console.log(goals);
    return goals;
  } catch (error) {
    throw new Error(error);
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

//deleteAGoal("6517c79d43c15bac5f5f76f3");

module.exports = {
  createNewGoal,
  readAllGoals,
  deleteAGoal,
};
