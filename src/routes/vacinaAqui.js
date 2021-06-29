const express = require("express")
const router = express.Router()

const controller = require("../controllers/vacinaController")

// post
router.post("/", controller.create)

// get
router.get("/", controller.getAll)
router.get("/bairro", controller.getBairro)

module.exports = router