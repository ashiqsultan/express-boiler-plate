'use strict';
const jwt = require('jsonwebtoken');
const secretKEY = require('./secretkey'); // should be stored in env
const jwtOptions = require('./options');

module.exports = async function(req, res, next) {
	//Get token from header
	const token = req.header('x-auth-token'); // KEY, the token should be sent in the header with this key
	if (!token) {
		return res.status(401).json({ message: 'Authorization denied' });
	}
	try {
		const verifyOptions = jwtOptions;
		await jwt.verify(token, secretKEY, verifyOptions, (error, decoded) => {
			if (error) {
				const message = 'Token is not valid';
				res.status(401).json({ message });
			} else {
				req.useremail = decoded.user.email;
				req.role = decoded.user.role;
				next();
			}
		});
	} catch (error) {
		console.error(error)
		console.log('Something wrong with the auth middleware');
		res.status(500).json({ message: 'Server Error' });
	}
};
