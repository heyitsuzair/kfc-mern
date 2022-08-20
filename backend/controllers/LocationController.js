const location = require("../models/LocationModel");
module.exports.addLocation = async (req, res) => {
  try {
    const { lng, lat, email } = req.body;
    const addedLocation = await location.create({ email, lng, lat });

    return res.status(200).json({ error: false });
  } catch (error) {
    console.error(error);
  }
};
