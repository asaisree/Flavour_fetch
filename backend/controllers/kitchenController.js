const asyncHandler=require("express-async-handler");
const Kitchen=require("../models/kitchenModel.js");
const getKitchen = asyncHandler(async (req, res) => {
    const kitchen = await Kitchen.find()
    res.json(kitchen);
});

module.exports = { getKitchen };