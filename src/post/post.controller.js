const postModel = require("./post.model");

module.exports = {
  index: async function (req, res) {
    const posts = await postModel.getAll();
    res.send(posts);
  },

  save: async function (req, res) {
    const { userId, text, photoURL } =
      req.body;

    const payload = {
      user_id: userId,
      post_text: text,
      post_photo: photoURL,
    };

    const post = await postModel.create(payload);
    res.send(post);
  },
};