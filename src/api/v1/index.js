const express = require('express');
const router = express.Router();
const login = require('./controllers/login');
const protected = require('./controllers/protected');
const checkJwt = require('../../util/jwt/checkJwt');
const admin = require('../../Roles/Admin');
const student = require('../../Roles/Student');
const { checkRoleMW } = require('../../../custom_modules/role-based-access/Role');
const { checkManyRoleMW } = require('../../../custom_modules/role-based-access/Role');

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
router.post('/protected', [checkJwt, checkManyRoleMW([admin])], protected);
module.exports = router;
