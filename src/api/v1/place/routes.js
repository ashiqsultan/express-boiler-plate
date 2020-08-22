const router = require('express').Router();
const within = require('../../../services/place/within');
const near = require('./controllers/near');

// GET '/near'
router.get('/near', near);
// POST '/within'
router.post('/within', within);

module.exports = router;
