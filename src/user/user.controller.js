const bcrypt = require("bcrypt");
const jwtHelper = require("../auth/jwtHelper");
const ms = require("ms");

const userModel = require("./user.model");

module.exports = {
  save: async function (req, res) {
    try {
      const { email, password } = req.body;

      const hashPassword = await bcrypt.hash(password, 10);
      if (!hashPassword) {
        throw new Error();
      }

      const payload = {
        email,
        password: hashPassword,
      };

      const user = await userModel.create(payload);
      const jwtToken = jwtHelper.createToken(user.user_id, user.email);
      const cookieOption = jwtHelper.getCookieOptions();

      return res.status(200).cookie("jwtToken", jwtToken, cookieOption).send();
    } catch (error) {
      console.log(error);
      return res.status(500).send();
    }
  },

  login: async function (req, res) {
    try {
      const { email, password } = req.body;
      const user = await userModel.login(email);
      const match = await bcrypt.compare(password, user.password);
      if (user.length === 0 || !match) {
        return res.send(JSON.stringify("Invalid credentials"));
      }

      const jwtToken = jwtHelper.createToken(user.id, user.email);
      const cookieOptions = jwtHelper.getCookieOptions();
      return res
        .status(200)
        .cookie("jwtToken", jwtToken, cookieOptions)
        .send(user[0]);
    } catch (error) {
      console.log(error);
      return res.status(500).send();
    }
  },

  logout: async function (req, res) {
    try {
      const cookieOptions = {
        httpOnly: true,
        expiresIn: new Date(Date.now() + ms("5s")),
      };
      res.status(200).cookie("jwtToken", "", cookieOptions).send();
    } catch (error) {
      console.log(error);
      res.status(500).send();
    }
  },

  // ***** DEVELOPMENT ONLY *****
  index: async function (req, res) {
    const users = await userModel.getAll();
    res.send(users);
  },
};
