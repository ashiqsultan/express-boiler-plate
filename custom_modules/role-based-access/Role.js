class Role {
	constructor(name) {
		this.name = name;
	}
	checkRole(calimName) {
		return calimName === this.name ? true : false;
	}
}

const checkRoleMW = role => {
	return (req, res, next) => {
		if (role.checkRole(req.role)) {
			next();
		} else {
			const message = 'Unauthorized Request';
			res.status(401).json({ message });
		}
	};
};

const checkManyRoleMW = roles => {
	return (req, res, next) => {
		const validity = [];
		roles.map(role => {
			validity.push(role.checkRole(req.role));
		});
		console.log(validity)
		if (validity.includes(true)) {
			next();
		} else {
			const message = 'Unauthorized Request';
			res.status(401).json({ message });
		}
	};
};

module.exports = { Role, checkRoleMW, checkManyRoleMW };
