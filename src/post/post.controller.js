const postModel = require("./post.model");

module.exports = {
  index: async function (req, res) {
    const posts = await postModel.getAll();
    res.send(posts);
  },

  save: async function (req, res) {
    const { userId, text, photoURL } = req.body;

    const payload = {
      user_id: userId,
      post_text: text,
      post_photo: photoURL,
    };

    const post = await postModel.create(payload);
    res.send(post);
  },

  updatePost: async function (req, res) {
    try {
      // TODO This needs to check the post that user going to update is actually belongs to the user
      const { userId, postId, postText } = req.body;
      postModel.updatePost({ postId, postText });
      res.status(200).send();
    } catch (error) {
      console.log(error);
      res.status(500).send();
    }
  },
};
