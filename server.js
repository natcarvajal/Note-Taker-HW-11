// dependencies
const express = require("express");
var path = require("path");

const app = express();

// routes
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
  });

app.get("/notes", function (req, res) {
  res.sendFile(__dirname + "/notes.html");
});


// listening
app.listen(8080, function () {
  console.log("Listening on port 8080");
});
