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
        fullName: "profiles.full_name",
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

  /**
   * Count how many post by post id
   *
   * @param {number} postId Post id
   * @returns count result
   */
  countByPostId: async function (postId) {
    const count_result = await knex
      .count("post_id")
      .from(POSTS_TABLE)
      .where({ post_id: postId })
      .first();

    return count_result.count;
  },

  /**
   * Update post by post id
   *
   * @param {{postId: number, postText: string}} post Post object
   */
  updatePost: async function (post) {
    const count = await this.countByPostId(post.postId);
    if (count === 0) {
      throw new Error();
    }

    await knex(POSTS_TABLE)
      .update({
        post_text: post.postText,
        updated_at: knex.fn.now(),
      })
      .where({ post_id: post.postId });
  },

  /**
   * Delete post by post id
   *
   * @param {number} post_id Post id
   */
  deletePost: async function (post_id) {
    await knex(POSTS_TABLE).where({ post_id }).del();
  },
};
