const router = require('express').Router();
const within = require('../../../../services/place/within');
const checkAuth = require('../../../middlewares/checkAuth');

// array of middlewars to be called befor executing the conntroller
const middlewares = [checkAuth];

router.use(middlewares, async (req, res, next) => {
  console.log(req.middlewareTest);
  try {
    const geometry = req.body.geometry;
    const places = await within(geometry);
    res.json({ response: { places } });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
