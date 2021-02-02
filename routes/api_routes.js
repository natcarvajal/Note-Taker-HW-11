const fs = require("fs");
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
    fs.readFile(db, "utf-8", (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
    // Add a UUID to the incoming payload
    const newNote = req.body;
    newNote.id = uuidv4();
    // Add the new payload to the parsed json
    // Rewrite the file with the new array
    // Respond with the new array
    res.json({ the_body: req.body });
  });

  app.delete("/api/notes/:id", (req, res) => {
    // I can get access to the id through req.params.id
    // Read the file
    // Find the UUID matching the one in the params object
    // Delete it
    // Send back the array with the deleted note
  });
};
