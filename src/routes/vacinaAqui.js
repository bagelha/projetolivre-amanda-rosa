const express = require("express")
const router = express.Router()

const controller = require("../controllers/vacinaController")

// post
router.post("/", controller.create)

// get
router.get("/", controller.getAll)
router.get("/bairros", controller.getBairro)

// delete
router.delete("/:id", controller.deleteLocal)

// put
router.put("/:id", controller.atualizaLocal)


module.exports = router