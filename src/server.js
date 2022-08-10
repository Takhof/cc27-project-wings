// const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// to work with directory paths - see static middleware
const path = require("path");

const cookieController = require("./auth/cookie.controller");
const userController = require("./user/user.controller");
const profileController = require("./profile/profile.controller");
const postController = require("./post/post.controller");

const app = express();

const PORT = process.env.PORT || 3030;

// ***** MIDDLEWARE *****

// TEST ONLY:
// having run: npm run build: __dirname will take us to the root folder, then point to the build folder
// app.use(express.static(path.join(__dirname, "../build")));
// console.log(__dirname);

// if production, serve static content
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
}

app.use(
  cors({
    allowedHeaders: ["Content-Type"],
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
); // Required for front and backend using localhost
app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: true })); // Parse form-encoded data
app.use(cookieParser());

// ***** ROUTES *********

// cookie
app.get("/cookie/payload", cookieController.extractPayload);

// user
app.get("/users", userController.index); // DEV ONLY
app.get("/users/logout", userController.logout); // logout user
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
app.put("/posts/:id", postController.updatePost); // edit post
app.delete("/posts/:id", postController.deletePost); // delete post

// ***** CATCH ALL ********

// catch anything that isn't a defined route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..build/index.html"));
});

// ***** LISTEN ********

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
