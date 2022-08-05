const userModel = require("./user.model");

module.exports = {
	save: async function (req, res) {
		// id auto-generated
		const { email, password } = req.body;

		const payload = {
			email,
			password,
		};

		let user;

		user = await userModel.create(payload);
		res.send(user);
	},

	login: async function (req, res) {
		const { email, password } = req.body;

		let user;

		user = await userModel.login(email, password);
		if (user.length === 0){
			res.send(JSON.stringify("Invalid credentials"));
		} else {
			res.send(user);
		}
	},

	// ***** DEVELOPMENT ONLY *****
	index: async function (req, res) {
		const users = await userModel.getAll();
		res.send(users);
	},
};
