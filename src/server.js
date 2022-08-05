// const path = require("path");
const express = require("express");
const cors = require("cors");
// to work with directory paths - see static middleware
const path = require("path");

const userController = require("./user/user.controller");
const profileController = require("./profile/profile.controller");
const postController = require("./post/post.controller");

const app = express();

const PORT = process.env.PORT || 3030;

// ***** MIDDLEWARE *****
app.use(express.static(path.join(__dirname, "../build")));
console.log(__dirname);

// if production, serve static content
if (process.env.NODE_ENV === "production") {
  // having run: npm run build: __dirname will take us to the root folder, then point to the build folder
  app.use(express.static(path.join(__dirname, "../build")));
}

app.use(cors()); // Required for front and backend using localhost
app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: true })); // Parse form-encoded data

// ***** ROUTES *********

// user
app.get("/users", userController.index); // DEV ONLY
app.post("/users/login", userController.login); // login user
app.post("/users/save", userController.save); // register new user

// profile
app.get("/profiles", profileController.index); // view all profiles
app.get("/profiles/view/:id", profileController.view); // view single profile
app.patch("/profiles/edit/:id", profileController.edit); // edit profile
app.post("/profiles/save", profileController.save); // add new profile

// post
app.get("/posts", postController.index); // view all newsfeed posts
app.post("/posts/save", postController.save); // add new post

// ***** LISTEN ********

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
