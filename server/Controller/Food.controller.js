const express = require("express");

const foodRouter = express.Router();

const {
  addFoodItems,
  readAllFoodItems,
  deleteFoodItem,
} = require("../Services/Food.services");

foodRouter.get("/", async (req, res) => {
  try {
    const foodItems = await readAllFoodItems();
    return res.status(200).json({ message: "Success", foodItems });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

foodRouter.post("/", async (req, res) => {
  try {
    const objToInsert = req.body;
    const insertedObj = await addFoodItems(objToInsert);
    const allFoodItems = await readAllFoodItems();
    return res
      .status(200)
      .json({ message: "Success", insertedObj, allFoodItems });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

foodRouter.delete("/:foodId", async (req, res) => {
  try {
    const { foodId } = req.params;
    const deletedData = await deleteFoodItem(foodId);
    const allFoodItems = await readAllFoodItems();
    return res
      .status(200)
      .json({ message: "Success", deletedData, allFoodItems });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

module.exports = foodRouter;
