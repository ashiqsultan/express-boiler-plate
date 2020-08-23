const router = require('express').Router();
const getAllFood = require('./controllers/getAllFood');
const postFood = require('./controllers/postFood');

// GET '/'
router.get('/', getAllFood);
// POST '/'
router.post('/', postFood);

module.exports = router;
