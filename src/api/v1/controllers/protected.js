const protected = async (req, res, next) => {
	try {
		res.json('This is Protected route'); // this will send the token as a json
	} catch (error) {
		console.error(`Error catched on post request ${error.message}`);
		res.status(500).send('Server Error');
	}
};

module.exports = protected;
