require("dotenv").config()
const { PORT } = process.env

const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")


const NotesRouter = require('./routes/notes.routes')
const mongoose = require("./db/db")



//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("tiny"))
//end of middleware


//insert routers
app.use("/notes", NotesRouter)

app.get("/", (req, res) => {
res.send("Here is the root of the API")
})

app.listen(PORT, () => {
    console.log("Port is listening on port " + PORT)
})
