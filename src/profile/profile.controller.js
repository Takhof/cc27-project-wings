const profileModel = require("./profile.model");

module.exports = {
  // DONE
  index: async function (req, res) {
    const profiles = await profileModel.getAll();
    res.send(profiles);
  },

  // VIEW SINGLE PROFILE
  view: async function (req, res) {
    const id = parseInt(req.params.id);
    const profile = await profileModel.getByID(id);
    res.send(profile);
  },

  edit: async function (req, res) {
    // TODO
  },

  save: async function (req, res) {
    // TODO
  },
};
