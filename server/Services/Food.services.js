const Food = require("../models/Food.model");

async function addFoodItems(foodData) {
  try {
    const food = await new Food(foodData);
    const itemAdded = await food.save();
    return itemAdded;
  } catch (error) {
    console.log("error occurred", error);
    throw new error();
  }
}

const foodItem5 = {
  name: "Avocado",
  calories: 160,
  proteinsInGrams: 2,
  carbohydratesInGrams: 9,
  fatInGrams: 14,
};

//addFoodItems(foodItem5);

async function readAllFoodItems() {
  try {
    const foodItems = await Food.find();
    return foodItems;
  } catch (error) {
    throw new error();
  }
}

//6517c1531c017794f575748breadAllFoodItems();

async function deleteFoodItem(foodId) {
  try {
    const deletedItem = await Food.findByIdAndDelete(foodId);
    return deletedItem;
  } catch (error) {
    console.log("deleted item", error);
    throw new error();
  }
}
//deleteFoodItem("6517c1531c017794f575748b");

module.exports = {
  addFoodItems,
  readAllFoodItems,
  deleteFoodItem,
};
