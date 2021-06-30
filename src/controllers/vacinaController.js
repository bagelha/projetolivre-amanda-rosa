// id: gerado automaticamente
// nome: texto
// endereco: texto
// bairro
// telefone: texto
// qtdInsumo: numero
// dtCriacao: date
// coordenada ==> opcional

const mongoose= require ("mongoose")
const Vacina = require("../models/vacinaModels")

// criar local ==> save()

const create = async (request, response)=>{
    let local= new Vacina({
        _id: new mongoose.Types.ObjectId(),
        nome: request.body.nome,
        bairro: request.body.bairro,
        endereco: request.body.endereco,
        telefone: request.body.telefone,
        qtdInsumo: request.body.qtdInsumo,
        dtCriacao: request.body.dtCriacao
    })

    const localExiste = await Vacina.findOne({nome:request.body.nome})

    if(localExiste){
        return response.status(409).json({error: "Local já cadastrado"})
    }

    try{
        const novoLocal = await local.save()
        response.status(200).json([{
            message: "Local cadastrado com sucesso",
            novoLocal}])
    }catch(err){
        response.status(500).json({message:err.message})
    }
}


// buscar ==> find()
const getAll = async(request, response)=>{
    const locais = await Vacina.find()
    return response.status(200).json([{
        message:"Olá, essa é a lista com os locais de vacinação da sua cidade",
        locais
    }])
}

// ver depois
const getBairro = async (request, response)=>{
    const encontraBairro = await Vacina.find({})
    
    const bairroMap = {}
    
    encontraBairro.forEach((bairroVacina)=>{
        bairroMap[bairroVacina.bairro] = bairroVacina
    })

    response.send(200).json(bairroMap)
   
}


// deletar ==> remove()
const deleteLocal = async (request, response)=>{
    const encontraLocal = await Vacina.findById(request.params.id)

    if(encontraLocal == null){
        response.status(404).json({message: "Unidade não encontrada"})
    }

    try{
        await encontraLocal.remove()
        response.status(200).json([{
            message: "Remoção realizada com sucesso",
            encontraLocal
        }])
    }catch(err){
        response.status(500).json({message: err.message})
    }
}

// update


module.exports = {
    create, 
    getAll,
    getBairro,
    deleteLocal
}


