const express = require('express');
const router = express.Router();
const login = require('./controllers/login');
const protected = require('./controllers/protected');
const private = require('./controllers/private');
const checkJwt = require('../../util/jwt/checkJwt');
const {admin,student,teacher} = require('../../Roles/UserRoles');
const { checkRole } = require('route-access-control');

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
		console.log(req);
		res.json('hello you made a POST req');
	} catch (error) {
		next(error);
	}
});

router.post('/login', login);
// Authenticating roles in Middleware
router.post('/protected', [checkJwt, checkRole(admin, student,teacher)], protected);
// Authenticating roles in inside request handler function
router.post('/private', checkJwt, private);
module.exports = router;
