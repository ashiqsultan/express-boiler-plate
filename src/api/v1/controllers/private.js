const { admin, student, teacher } = require('../../../Roles/UserRoles');
const { isRoleAuthorized } = require('route-access-control');

const private = async (req, res, next) => {
	try {
		console.log(`username ${req.useremail} user role ${req.role}`);
		const claimedRole = req.role;
		const allowedRoles = [admin];
		const isAuthorized = await isRoleAuthorized(claimedRole, allowedRoles);
		if (isAuthorized) {
			res.json('This is private route');
		} else {
			const message = 'User not authorized';
			res.status(401).json({ message });
		}
	} catch (error) {
		console.error(`Error catched on post request ${error.message}`);
		next(error);
	}
};

module.exports = private;
