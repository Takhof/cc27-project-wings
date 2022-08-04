const profileModel = require("./profile.model");

module.exports = {
  // DONE
  index: async function (req, res) {
    const profiles = await profileModel.getAll();
    res.send(profiles);
  },

  // DONE
  view: async function (req, res) {
    const id = parseInt(req.params.id);
    const profile = await profileModel.getByID(id);
    res.send(profile);
  },

  // EDIT PROFILE
  edit: async function (req, res) {
    // id from params
    const id = parseInt(req.params.id);
    // data from body - assign values by key
    const { email, fullName, about, linkedIn, twitter, photoURL, cohort } =
      req.body;

    // db column: value
    const payload = {
      email: email,
      full_name: fullName,
      about: about,
      linkedin_profile: linkedIn,
      twitter_handle: twitter,
      profile_photo: photoURL,
      cc_cohort: cohort,
    };

    const profile = await profileModel.update(id, payload);
    res.send(profile);
  },

  save: async function (req, res) {
    // TODO
  },
};
