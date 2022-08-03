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

// Spool up
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
