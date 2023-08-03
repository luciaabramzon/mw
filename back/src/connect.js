const dotenv=require('dotenv')
dotenv.config()
const mongoose=require('mongoose')

const connect=async ()=>{
    await mongoose.connect(process.env.mongo)
    console.log('conectado a mongo')
}

module.exports={connect}