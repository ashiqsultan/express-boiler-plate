const postFood = require('../../../../services/food/postFood');
const checkAuth = require('../../../middlewares/checkAuth');
const router = require('express').Router();

// All the middlewares to be called befor the route can be included inside the Array
const middlewares = [checkAuth];

router.use(middlewares, async (req, res, next) => {
  console.log(req.middlewareTest);
  try {
    const foodToAdd = req.body.foodToAdd;
    const foods = await postFood(foodToAdd);
    res.json({ response: { foods } });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
