const mongoose = require("mongoose");
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  proteinsInGrams: {
    type: String,
    required: true,
  },
  carbohydratesInGrams: {
    type: String,
    required: true,
  },
  fatInGrams: {
    type: String,
    required: true,
  },
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
