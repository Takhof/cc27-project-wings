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
    // TODO
  },

  // ***** DEVELOPMENT ONLY *****
  index: async function (req, res) {
    const users = await userModel.getAll();
    res.send(users);
  },
};
