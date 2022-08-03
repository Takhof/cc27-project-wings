const express = require("express");
const cors = require("cors");
// const path = require("path");

const app = express();

const PORT = process.env.PORT || 3030;

// TODO how to connect React & Express...

// MIDDLEWARE
// // To allow requests using localhost
app.use(cors());
// Parsing JSON
app.use(express.json());
// Parsing form-encoded data
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(201).send(JSON.stringify("This is from the server!"));
});

app.post("/", (req, res) => {
  console.log("received request");
  res.send("Thanks for the request");
});

// Spool up
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
