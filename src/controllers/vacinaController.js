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
        response.status(201).json([{
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


const getBairro = async (request, response)=>{
    const encontraBairro = await Vacina.find(request.query)
    response.status(200).json([{
        message:"Olá, esse é o local mais próximo a você",
        encontraBairro
    }])
}


// deletar ==> remove()
const deleteLocal = async (request, response)=>{
    const encontraLocal = await Vacina.findById(request.params.id)

    if(encontraLocal == null){
        response.status(404).json({message: "Unidade não encontrada"})
    }

    try{
        await encontraLocal.remove()
        response.status(204).json([{
            message: "Remoção realizada com sucesso",
            encontraLocal
        }])
    }catch(err){
        response.status(500).json({message: err.message})
    }
}

// atualizar a partir do id ==> save()
const atualizaLocal = async(request, response)=>{
    const encontraLocal = await Vacina.findById(request.params.id)

    if(encontraLocal == null){
        response.status(404).json([{message: "Unidade não encontrada"}])
    }

    if(request.body.nome != null){
        encontraLocal.nome = request.body.nome
    }

    if(request.body.bairro != null){
        encontraLocal.bairro = request.body.bairro
    }

    if(request.body.endereco != null){
        encontraLocal.endereco = request.body.endereco
    }

    if(request.body.telefone != null){
        encontraLocal.telefone = request.body.telefone
    }

    if(request.body.qtdInsumo != null){
        encontraLocal.qtdInsumo = request.body.qtdInsumo
    }

    // banco de dados
    try{
        const atualizaLocal = await encontraLocal.save()
        response.status(200).json(atualizaLocal)
    }catch(err){
        response.status(500).json({messagem: err.message})
    }


}





module.exports = {
    create, 
    getAll,
    getBairro,
    deleteLocal,
    atualizaLocal
}


