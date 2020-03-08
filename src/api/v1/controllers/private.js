const admin = require('../../../Roles/Admin');
const student = require('../../../Roles/Student');
const {
	rolesAuth,
	rolesCheck
} = require('../../../../custom_modules/role-based-access/Role');
const private = async (req, res, next) => {
	try {
		console.log(req.useremail);
		console.log(req.role);
		const claimedRole = req.role;
		const allowedRoles = [admin];
		if (rolesCheck(claimedRole, ...allowedRoles)) {
			res.json('This is private route'); // this will send the token as a json
		} else {
			const message = 'Unauthorized Request';
			res.status(401).json({ message });
		}
	} catch (error) {
		console.error(`Error catched on post request ${error.message}`);
		res.status(500).send('Server Error');
	}
};

module.exports = private;
