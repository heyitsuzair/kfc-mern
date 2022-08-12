const cat = require("../models/CategoryModel");
module.exports.addCategory = async (req, res) => {
  try {
    const { catPic, name } = req.body;
    const addCat = await cat.create({ catPic, name });
    res.status(200).json({ error: false, addCat });
  } catch (error) {
    console.error(error);
  }
};
module.exports.getCat = async (req, res) => {
  try {
    const getCategories = await cat.find();
    res.status(200).json({ error: false, getCategories });
  } catch (error) {
    console.error(error);
  }
};
