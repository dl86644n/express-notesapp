// grabbing the controller and saving it to a variable called notes
const notes = require("../controllers/notes.controllers")

//grabbing a function called router from the express library and saving it to the variable router
const router = require("express").Router()

//router has all the http requests(we're using post to create)
//first parameter specifies the path, second parameter is the file that was declared
//on line 2, and then the function in the file used to create a note
router.post('/', notes.createNote)

router.get('/', notes.getNotes)

router.get('/:id', notes.getNoteById)

router.delete('/:id', notes.deleteNoteById)

module.exports = router





