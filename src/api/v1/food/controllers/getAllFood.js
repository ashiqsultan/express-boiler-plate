const getAllFood = require('../../../../services/food/getAllFood');
const router = require('express').Router();

router.use(async (req, res, next) => {
  try {
    const foods = await getAllFood();
    res.json({ response: { foods } });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
