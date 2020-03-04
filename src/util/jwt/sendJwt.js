'use strict';
const jwt = require('jsonwebtoken');
const secretKEY = require('./secretkey'); // should be stored in env
const jwtOptions = require('./options');

module.exports = function sentJWT(payloadData) {
	const payload = {
		user: {
			email: payloadData.email,
			role: payloadData.role
		}
	};
	const signOptions = jwtOptions;
	return new Promise(async (resolve, reject) => {
		jwt.sign(payload, secretKEY, signOptions, (error, token) => {
			if (error) reject(new Error(`JWT promise rejected \n ${error}`));
			else resolve({ token });
		});
	});
};
