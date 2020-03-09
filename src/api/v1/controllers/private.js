const admin = require('../../../Roles/Admin');
const student = require('../../../Roles/Student');
const teacher = require('../../../Roles/Teacher');
const { rolesValidate } = require('../../../../custom_modules/role-based-access/Role');

const private = async (req, res, next) => {
	try {
		console.log(`username ${req.useremail} user role ${req.role}`);
		const claimedRole = req.role;
		const allowedRoles = [admin, teacher];
		if (await rolesValidate(claimedRole, ...allowedRoles)) {
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
