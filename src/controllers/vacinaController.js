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

// criar local: get ==> save()

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


// get ==> find()
const getAll = async(request, response)=>{
    const locais = await Vacina.find()
    return response.status(200).json([{
        message:"Olá, essa é a lista com os locais de vacinação da sua cidade",
        locais
    }])
}

// // ver depois
// const getBairro = async (request, response)=>{
//     const bairroRequisitado = request.query.bairro
//     let novaLista = await []
   
//     await Vacina.find(bairroV =>{
//         let bairroLista = bairroV.bairro.split(",") 
//         for(item of bairroLista){
//             if(item.includes(bairroRequisitado) && bairroV.bairro.includes(item)){
//                 console.log(bairroV)
//                 novaLista.push(bairroV)
//             }
//         }
//     })

//     response.status(200).send(novaLista)
// }





module.exports = {
    create, 
    getAll,
    getBairro
}


