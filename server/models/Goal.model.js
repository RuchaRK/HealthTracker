const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  caloriesType: {
    type: String,
    enum: ["Consumed", "Burned"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  targetDate: {
    type: Date,
    required: true,
  },
  targetCalories: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["InProgress", "Achieved", "Abandoned"],
    required: true,
  },
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
