const profileModel = require("./profile.model");

module.exports = {
  save: async function (req, res) {
    // TODO
  },

  index: async function (req, res) {
    const profiles = await profileModel.getAll();
    res.send(profiles);
  },
};
