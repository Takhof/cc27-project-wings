const knex = require("../knex");
const PROFILES_TABLE = "profiles";

module.exports = {
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

  getByID: function (id) {
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
      .where("profile_id", id)
      .first();
  },

  update: function (id, data) {
    // data is object with kvp either undefined or value
    // knex seems to update only defined values
    return knex(PROFILES_TABLE)
      .where("profile_id", id)
      .update(data, ["profile_id"])
      .then((res) => res[0]);
  },

  create: function (profile) {
    return knex(PROFILES_TABLE)
      .insert(profile, ["profile_id"])
      .then((res) => res[0]);
  },
};
