const userModel = require("./user.model");

// DELEGATE TO MODEL, RETURN TO VIEW

// export object to server.js
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

  // DEVELOPMENT ONLY
  index: async function (req, res) {
    const users = await userModel.getAll();
    console.log("USERS: ", users);
    res.send(users);
  },
};
