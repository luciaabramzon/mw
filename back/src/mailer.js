const nodemailer=require('nodemailer')
const dotenv=require('dotenv')
dotenv.config()

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.mail,
        pass:process.env.password
    }

})

const sendEmail=(emailOptions)=>{
    return new Promise((resolve,reject)=>{
        transporter.sendMail(emailOptions,(error,info)=>{
            if(error){
                reject(error)
            }else{
                resolve(info)
            }
        })
    })
}

module.exports=sendEmail