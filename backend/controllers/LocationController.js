const location = require("../models/LocationModel");
module.exports.addLocation = async (req, res) => {
  try {
    const { lng, lat, email, tag, street } = req.body;

    const addedLocation = await location.create({
      email,
      lng,
      lat,
      tag,
      street,
    });

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
module.exports.delLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLocation = await location.findByIdAndDelete(id);
    return res.status(200).json({ error: false });
  } catch (error) {
    console.error(error);
  }
};
module.exports.editLocation = async (req, res) => {
  try {
    const { id, lng, lat, tag, street } = req.body;

    const editedLocation = await location.findByIdAndUpdate(id, {
      lng,
      lat,
      tag,
      street,
    });

    return res.status(200).json({ error: false });
  } catch (error) {
    console.error(error);
  }
};
