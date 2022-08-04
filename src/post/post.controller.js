const postModel = require("./post.model");

module.exports = {
  index: async function (req, res) {
    const posts = await postModel.getAll();
    res.send(posts);
  },

  save: async function (req, res) {
    // TODO
  },
};
