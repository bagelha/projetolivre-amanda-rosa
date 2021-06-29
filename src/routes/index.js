const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "nomeProjeto":"VacinaAqui!",
        "version":"1.0.0",
        "mensagem":"API de localização dos pontos de vacinação contra a Covid-19 em Parauapebas-PA"
    })
})

module.exports = router