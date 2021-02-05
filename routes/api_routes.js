const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");
const { v4: uuidv4 } = require("uuid");
// console.log("db: ", db);
module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    const data = fs.readFileSync("db/db.json", "utf-8");
    return res.json(JSON.parse(data));
    // fs.readFile("./db/db.json", "utf-8", (err, data) => {
    //   if (err) throw err;
    //   res.json(data);
  });

  app.post("/api/notes", (req, res) => {
    // Read the db file
    // Parse the json
    // Add a UUID to the incoming payload
    // Add the new payload to the parsed json
    // Rewrite the file with the new array
    // Respond with the new array
    let notes = fs.readFileSync("db/db.json", "utf-8");
    const newNote = req.body;
    newNote.id = uuidv4();
    notes = JSON.parse(notes);
    notes.push(newNote);

    fs.writeFileSync("db/db.json", JSON.stringify(notes));
    return res.json(notes);
  });

  //   app.delete("/api/notes/:id", (req, res) => {
  //     let del = req.params.id;
  //     fs.readFile(db, "utf-8", (err, data) => {
  //       if (err) throw err;
  //       let notes = JSON.parse(data);
  //       db = db.filter((notes) => notes.id != del);
  //       res.json(notes);
  //     });
  // // I can get access to the id through req.params.id
  // Read the file
  // Find the UUID matching the one in the params object
  // Delete it
  // Send back the array with the deleted note
  //   });
};
