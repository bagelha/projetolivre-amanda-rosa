// id: gerado automaticamente
// nome: texto
// endereco: texto
// bairro: texto
// telefone: texto
// qtdInsumo: numero
// dtCriacao: date
// coordenada ==> opcional

const mongoose = require("mongoose")

const vacinaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome:{
        type:String,
        required:true
    },
    endereco:{
        type:String,
        required:true
    },
    bairro:{
        type:String,
        required:true
    },
    telefone:{
        type:String,
        required:true
    },
    qtdInsumo:{
        type: Number,
        required:true
    },
    dtCriacao:{
        type: Date,
        required:true,
        default: new Date
    }
})


module.exports = mongoose.model("vacina", vacinaSchema)