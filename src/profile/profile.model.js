const knex = require("../knex");
const PROFILES_TABLE = "profiles";

module.exports = {
  create: function (profile) {
    return knex(PROFILES_TABLE)
      .insert(profile, ["profile_id"])
      .then((res) => res[0]);
  },

  getAll: function (limit = 30) {
    return knex
      .select({
        id: "profile_id",
        email: "email",
        fullName: "full_name",
        about: "about",
        linkedIn: "linkedin_profile",
        twitter: "twitter_handle",
        photoURL: "profile_photo",
        cohort: "cc_cohort",
      })
      .from(PROFILES_TABLE)
      .orderBy("fullName")
      .limit(limit);
  },
};
