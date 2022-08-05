const userModel = require("./user.model");

module.exports = {
	save: async function (req, res) {
		// id auto-generated
		const { email, password, active } = req.body;

		const payload = {
			email,
			password,
			active,
		};

		let user;

		user = await userModel.create(payload);
		res.send(user);
	},

	login: async function (req, res) {
		console.log(req.body);
		res.send(JSON.stringify(req.body));
	},

	// ***** DEVELOPMENT ONLY *****
	index: async function (req, res) {
		const users = await userModel.getAll();
		res.send(users);
	},
};
