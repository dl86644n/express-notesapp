const Notes = require("../models/notes.models");

exports.createNote = (req, res) => {
  const newNote = Notes.create(req.body)
    .then((data) => {
      res.status(201).send({
        message: "Note has been created",
        newNote,
      });
    })
    .catch((error) => {
      res.status(500).send({ error });
    });
};

exports.getNotes = (req, res) => {
  const allNotes = Notes.find({})
    .then((data) => {
      data.length === 0
        ? res.status(200).send({ message: "Here are all the notes", allNotes })
        : res.status(400).send({
            message: "There are no notes to find",
          });
    })
    .catch((error) => {
      res.status(500).send({ error: error });
    });
};
