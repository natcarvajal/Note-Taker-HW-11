const { response } = require("express");
const fs = require("fs");
const path = require("path");
const db = __dirname + "/../db/db.json";
const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    fs.readFile(db, "utf-8", (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

  app.post("/api/notes", (req, res) => {
    // Read the db file
    // Parse the json
    // Add a UUID to the incoming payload
    // Add the new payload to the parsed json
    // Rewrite the file with the new array
    // Respond with the new array
    fs.readFile(db, "utf-8", (err, data) => {
      let notes = [];
      if (err) throw err;
      const newNote = req.body;
      newNote.id = uuidv4();
      notes.push(newNote);
      fs.writeFile(
        path.join(__dirname + "/../db/db.json", JSON.stringify(data))
      );
      response.json(data);
    });
  });

  app.delete("/api/notes/:id", (req, res) => {
    let del = req.params.id;
    fs.readFile(db, "utf-8", (err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);
      db = db.filter((notes) => notes.id != del);
      response.json(notes);
    });
    // // I can get access to the id through req.params.id
    // Read the file
    // Find the UUID matching the one in the params object
    // Delete it
    // Send back the array with the deleted note
  });
};
