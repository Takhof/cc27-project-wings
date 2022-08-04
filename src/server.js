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

// ********************************* ROUTES ***********************************

// user
app.post("/users/save", userController.save); // register new user

// profile
app.get("/profiles", profileController.index); // view all profiles
app.post("/profiles/save", profileController.save); // add new profile

// post

/*

// REGISTER
app.post("/api/register", (req, res) => {
  // call model to update db (profiles)
  // re-route to /api/newsfeed?
});

// LOGIN
app.get("/api/login", (req, res) => {
  // call model to query db (users)
  // re-route to /api/newsfeed?
});

// VIEW NEWSFEED
app.get("/api/newsfeed", (req, res) => {
  // call model to query db
  // send newsfeed object to frontend
});

// DIRECTORY
app.get("/api/users", (req, res) => {
  // call model to query db (users)
  // send profile object to frontend
});

// SINGLE PROFILE (called on click in directory)
app.get("/api/profile/:id", (req, res) => {
  // call model to query db (profiles)
  // send profile object to frontend
});

// UPDATE PROFILE
app.post("/api/profile", (req, res) => {
  // call model to update db (profiles)
  // return profile object to frontend
});

// ADD POST
app.post("/api/post", (req, res) => {
  // call model to update db (posts)
  // send newsfeed object to frontend
});

*/

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
