'use strict';

class Role {
	constructor(name) {
		this.name = name;
	}
	check(calimName) {
		return calimName === this.name ? true : false;
	}
}

const sendUnauthorizedError = res => {
	const message = 'Unauthorized Request';
	res.status(401).json({ message });
};

// Check Role Middleware function requires the claimed role to be inside req.role
// Example: req.role = 'admin'
const rolesAuth = (...roles) => {
	return (req, res, next) => {
		try {
			const results = [];
			roles.map(role => {
				results.push(role.check(req.role));
			});
			results.includes(true) ? next() : sendUnauthorizedError(res);
		} catch (error) {
			next(error);
		}
	};
};

const rolesCheck = (claimedRole, ...allowedRoles) => {
	try {
		const results = [];
		allowedRoles.map(role => {
			results.push(role.check(claimedRole));
		});
		return results.includes(true) ? true : false;
	} catch (error) {
		console.error(error);
		return false;
	}
};
module.exports = { Role, rolesAuth, rolesCheck };
