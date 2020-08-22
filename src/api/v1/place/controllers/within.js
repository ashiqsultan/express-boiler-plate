const within = require('../../../../services/place/within');

module.exports = async (req, res, next) => {
  try {
    const geometry = req.body.geometry;
    const places = await within(geometry);
    res.json({ response: { places } });
  } catch (error) {
    next(error);
  }
};

module.exports = router;
