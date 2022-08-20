const location = require("../models/LocationModel");
module.exports.addLocation = async (req, res) => {
  try {
    const { lng, lat, email, tag } = req.body;
    const addedLocation = await location.create({ email, lng, lat, tag });

    return res.status(200).json({ error: false });
  } catch (error) {
    console.error(error);
  }
};
module.exports.getLocations = async (req, res) => {
  try {
    const { email } = req.params;

    const locations = await location.find({ email });
    return res.status(200).json(locations);
  } catch (error) {
    console.error(error);
  }
};
