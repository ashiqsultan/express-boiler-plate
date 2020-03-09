const sendJWT = require('../../../util/jwt/sendJwt');
const login = async (req, res, next) => {
	const { email } = req.body;
	const role = 'student'; // role stored in database
	try {
		// Getting User details from the provided email, if no email means no user so send error
		if (!email) {
			const message = 'Invalid Credentials';
			return res.status(400).json({ message });
		} else {
			// Check DataBase for user id
			const payloadData = {
				email: email,
				role: role
			};
			res.json(await sendJWT(payloadData)); // this will send the token as a json
		}
	} catch (error) {
		console.error(`Error catched on post request ${error.message}`);
		res.status(500).send('Server Error');
	}
};
module.exports = login;
