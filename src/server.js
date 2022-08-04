// const path = require("path");
const express = require("express");
const cors = require("cors");

const userController = require("./user/user.controller");
const profileController = require("./profile/profile.controller");
const postController = require("./post/post.controller");

const app = express();

const PORT = process.env.PORT || 3030;

// Required for front and backend using localhost
app.use(cors());
// Parse JSON
app.use(express.json());
// Parsing form-encoded data
app.use(express.urlencoded({ extended: true }));

// user
app.post("/users/login", userController.login); // login user
app.post("/users/save", userController.save); // register new user

// profile
app.get("/profiles", profileController.index); // view all profiles
app.get("/profiles/view/:id", profileController.view); // view single profile
app.get("/profiles/edit/:id", profileController.edit); // edit profile
app.post("/profiles/save", profileController.save); // add new profile

// post
app.get("/posts", postController.index); // view all newsfeed posts
app.post("/posts/save", postController.save); // add new post

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
