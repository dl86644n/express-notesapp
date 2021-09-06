const Notes = require("../models/notes.models");

exports.createNote = (req, res) => {
  Notes.create(req.body)
    .then((data) => {
      res.status(201).send({
        message: "Note has been created",
        data,
      });
    })
    .catch((error) => {
      res.status(500).send({ error });
    });
};

exports.getNotes = (req, res) => {
  Notes.find({})
    .then((data) => {
      res.status(200).send({ message: "Here are all the notes", data });
    })
    .catch((error) => {
      res.status(500).send({ error: error });
    });
};
