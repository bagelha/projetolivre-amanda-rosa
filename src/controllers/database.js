require ("dotenv").config()
const mongoose = require("mongoose")

const connect = ()=>{
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("Aplicação conectada ao MongoDB"))
    .then(err=>console.err)
}

module.exports = {connect}