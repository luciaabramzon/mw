const express=require('express')
const router=express.Router()
const Contact=require('./Schema')
const sendEmail=require('./mailer')
const dotenv=require('dotenv')
dotenv.config()

router.post('/contact',async(req,res)=>{
try{
    const{nombre,apellido,asunto,mensaje}=req.body
    const newContact=new Contact({nombre,apellido,asunto,mensaje})
    await newContact.save()
    const emailOptions={
        form:process.env.mail,
        to:process.env.mail,
        subject:'Nuevo usuario',
        html:`nombre:${nombre} , apellido ${apellido} , asunto ${asunto}, mensaje ${mensaje}`

    }
    await sendEmail(emailOptions)
    res.status(200).json({message:"Mensaje enviado"})
}catch(err){
    res.status(500).json({error:err})
}
})

module.exports=router