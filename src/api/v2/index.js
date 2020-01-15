const express = require('express');
const router = express.Router();

// GET '/'
router.get('/', async (req, res, next) => {
	try {
		res.json('Hello world welcome to version 2');
	} catch (error) {
		next(error);
	}
});

// POST '/'
router.post('/', async (req, res, next) => {
	try {
		res.json('Hello world ! you made a POST request to 2');
	} catch (error) {
		next(error);
	}
});

module.exports = router;
