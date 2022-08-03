const express = require("express");
// const path = require("path");

const app = express();

const PORT = process.env.PORT || 3030;

// TODO how to connect React & Express...

// MIDDLEWARE

// Parsing JSON
app.use(express.json());
// Parsing form-encoded data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This is from the server!");
});

app.post("/", (req, res) => {
  console.log("received request");
  res.send("Thanks for the request");
});

// Spool up
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
