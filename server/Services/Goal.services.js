const Goal = require("../models/Goal.model");

async function createNewGoal(goalData) {
  try {
    const goal = await new Goal(goalData);
    const newGoal = await goal.save();
    console.log(newGoal);
  } catch (error) {
    console.log("error appeared -", error);
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
  } catch (error) {
    console.log(error);
  }
}

//readAllGoals();

async function deleteAGoal(goalId) {
  try {
    const deletedGoal = await Goal.findByIdAndDelete(goalId);
    console.log(deletedGoal);
  } catch (error) {
    console.log("error appeared", error);
  }
}

deleteAGoal("6517c79d43c15bac5f5f76f3");

module.exports = {
  createNewGoal,
  readAllGoals,
  deleteAGoal,
};
