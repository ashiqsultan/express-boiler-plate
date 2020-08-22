const router = require('express').Router();
const getAllFood = require('./controllers/getAllFood')
// GET '/'
router.get('/', getAllFood);

module.exports = router;
