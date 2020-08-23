const router = require('express').Router();
const near = require('./controllers/near');
const within = require('./controllers/within');

// GET '/near'
router.get('/near', near);
// POST '/within'
router.post('/within', within);

module.exports = router;
