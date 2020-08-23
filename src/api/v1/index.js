const router = require('express').Router();
const place = require('./place/routes');
const food = require('./food/routes');

// route resources
router.use('/place', place);
router.use('/food', food);

module.exports = router;
