const getAllFood = require('../../../../services/food/getAllFood');

module.exports = async (req, res, next) => {
  try {
    const foods = await getAllFood();

    res.json({ response: { foods } });
  } catch (error) {
    next(error);
  }
};
