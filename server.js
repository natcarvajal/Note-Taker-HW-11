// dependencies
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/api_routes");
var path = require("path");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// Create a route for all assets within public
app.use(express.static("public"));
require("./routes/api_routes")(app);

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/notes.html"));
});

// routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

// listening
app.listen(8080, function () {
  console.log("Listening on port 8080");
});

// The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

// The following API routes should be created:

// GET /api/notes - Should read the db.json file and return all saved notes as JSON.

// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

// DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
