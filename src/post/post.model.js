const knex = require("../knex");
const POSTS_TABLE = "posts";
const PROFILES_TABLE = "profiles";

module.exports = {
  getAll: function (limit = 20) {
    return knex
      .select({
        postID: "post_id",
        userID: "posts.user_id",
        text: "post_text",
        postPhoto: "post_photo",
        date: "post_date",
        profilePhoto: "profiles.profile_photo",
        fullName: "profiles.full_name"
      })
      .from(POSTS_TABLE)
      .join(PROFILES_TABLE, "profiles.user_id", "posts.user_id")
      .orderBy("post_date", "desc")
      .limit(limit);
  },

  create: function (post) {
    return knex(POSTS_TABLE)
      .insert(post, ["post_id"])
      .then((res) => res[0]);
  },
};
