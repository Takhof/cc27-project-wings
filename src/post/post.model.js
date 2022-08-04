const knex = require("../knex");
const POSTS_TABLE = "posts";

module.exports = {
  getAll: function (limit = 20) {
    return knex
      .select({
        postID: "post_id",
        userID: "user_id",
        text: "post_text",
        photoURL: "post_photo",
        date: "post_date",
      })
      .from(POSTS_TABLE)
      .orderBy("post_id")
      .limit(limit);
  },

  create: function (post) {
    return knex(POSTS_TABLE)
      .insert(post, ["post_id"])
      .then((res) => res[0]);
  },
};
