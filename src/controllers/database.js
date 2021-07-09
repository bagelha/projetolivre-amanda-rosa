require ("dotenv").config()
const mongoose = require("mongoose")

const MONGO_URL = process.env.MONGO_URI

const connect = ()=>{
    mongoose.connect(MONGO_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("Aplicação conectada ao MongoDB Atlas")
    })
    .catch((error)=>{
        console.log("Opa, tem algo errado com a aplicação")
        console.error(error)
    })
}
        


module.exports = {connect}