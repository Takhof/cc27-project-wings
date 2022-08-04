const profileModel = require("./profile.model");

module.exports = {
  index: async function (req, res) {
    const profiles = await profileModel.getAll();
    res.send(profiles);
  },

  view: async function (req, res) {
    // TODO
  },

  edit: async function (req, res) {
    // TODO
  },

  save: async function (req, res) {
    // TODO
  },
};
