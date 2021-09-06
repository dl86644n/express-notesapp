//destructuring below
//Schema is a built in class in mongoose that allows you to declare data
//model is used to name data
const { Schema, model } = require("mongoose");

//new declares a class
const notesModel = new Schema(
  {
    message: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 300,
    },
  },
  { timestamps: true }
)


//declaring notes and using the model function inside the mongoose library which 
//takes two parameters ( the first is a string that declares the name of the information in the database, 
//the second parameter is the data declared using Schema above)
const Notes = model("notes", notesModel)


module.exports = Notes
