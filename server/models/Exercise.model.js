const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  durationInMinutes: {
    type: String,
    required: true,
  },
  caloriesBurnedPerMinute: {
    type: Number,
    required: true,
  },
  caloriesBurned: {
    type: Number,
    default: function () {
      return this.durationInMinutes * this.caloriesBurnedPerMinute;
    },
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
