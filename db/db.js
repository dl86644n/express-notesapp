require("dotenv").config();

const Notes = require("../models/notes.models");

const mongoose = require("mongoose");
const config = {
  useUnifiedTopology: true,
//   useNewUrlParser: true,
//   useFindAndModify: true,
//   useCreateIndex: true,
};

const { MONGODBURI } = process.env

mongoose.connect(MONGODBURI, config)


mongoose.connection
.on("open", () => console.log("NotesAPI is connected to Mongo"))
.on("close", () => console.log("Mongo Connection Closed"))
.on("error", (error) => console.log(error))

module.exports = mongoose