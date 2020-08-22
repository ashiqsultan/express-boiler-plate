const near = require('../../../../services/place/near');

module.exports = async (req, res, next) => {
  try {
    const longitude = Number(req.query.lng);
    const latitude = Number(req.query.lat);
    const radius = Number(req.query.radius);
    const category = req.query.category;

    console.log({ longitude, latitude, radius, category });
    const places = await near(longitude, latitude, radius, category);

    res.json({ response: { places } });
  } catch (error) {
    next(error);
  }
};
