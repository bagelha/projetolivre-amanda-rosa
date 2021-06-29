const express = require("express")
const cors = require("cors")

const vacinaAqui =  require("./routes/vacinaAqui")
const index = require("./routes/index")

const db = require("./controllers/database")
db.connect()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/", index)
app.use("/vacinaAqui", vacinaAqui)

module.exports = app 