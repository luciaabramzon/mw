const express=require('express')
const app=express()
const PORT=process.env.PORT||8000
const cors=require('cors')
const routes=require('./src/routes')
const mailer=require('./src/mailer')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))

const {connect}=require('./src/connect')
connect()

app.use('/',routes)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})