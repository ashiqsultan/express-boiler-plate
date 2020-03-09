'use strict';
class Role {
	constructor(name) {
		this.name = name;
	}
	check(calimName) {
		return calimName === this.name ? true : false;
	}
}

const sendUnauthorized = res => {
	const message = 'Unauthorized';
	res.status(401).json({ message });
};

const rolesChecker = async (claimedRole, allowedRoles) => {
	const results = [];
	for await (let role of allowedRoles) {
		results.push(role.check(claimedRole));
	}
	return results;
};

// rolesAuth is a Middleware, it requires the claimed role to be inside req.role
const rolesAuth = (...allowedRoles) => {
	return async (req, res, next) => {
		try {
			const results = await rolesChecker(req.role, allowedRoles);
			console.log(results);
			results.includes(true) ? next() : sendUnauthorized(res);
		} catch (error) {
			next(error);
		}
	};
};

// rolesValidate is an async function which returns a boolean, Use it inside a route handler function with await
const rolesValidate = async (claimedRole, ...allowedRoles) => {
	try {
		const results = await rolesChecker(claimedRole, allowedRoles);
		return results.includes(true) ? true : false;
	} catch (error) {
		console.error(error);
		return false;
	}
};
module.exports = { Role, rolesAuth, rolesValidate };
