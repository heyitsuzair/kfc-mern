const fav = require("../models/FavouritesModel");
module.exports.addFav = async (req, res) => {
  try {
    const { prod_id, email } = req.body;
    const addFav = await fav.create({ prod_id, email });
    if (addFav) {
      return res.status(200).json({ error: false });
    } else {
      return res.status(200).json({ error: true });
    }
  } catch (error) {
    console.error(error);
  }
};
module.exports.getFavs = async (req, res) => {
  try {
    const { email } = req.params;

    const getFav = await fav
      .find({ email: email })
      .populate({ path: "prod_id" });

    if (getFav) {
      return res.status(200).json({ error: false, getFav });
    } else {
      return res.status(200).json({ error: true });
    }
  } catch (error) {
    console.error(error);
  }
};
module.exports.delFav = async (req, res) => {
  try {
    const { prod_id, email } = req.body;
    const deleteFav = await fav.deleteOne({ prod_id: prod_id, email: email });

    return res.status(200).json({ error: false });
  } catch (error) {
    console.error(error);
  }
};
