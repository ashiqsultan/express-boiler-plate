const express = require('express');
const router = express.Router();

// GET '/'
router.get('/', async (req, res, next) => {
	try {
		res.json('hello world!');
	} catch (error) {
		next(error);
	}
});

// POST '/'
router.post('/', async (req, res, next) => {
	try {
		res.json('hello you made a POST req');
	} catch (error) {
		next(error);
	}
});

module.exports = router;
