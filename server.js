const express = require('express')
const morgan = require('morgan')
const productRouter = require('./routes/product');
const mongoose = require('mongoose')


require('dotenv').config()

// const index = fs.readFileSync('index.html', 'utf-8');



const server = express();

// DB Connection

main().catch(err=>console.log(err))

async function main() {
    await mongoose.connect('mongodb+srv://user:zasx123@cluster0.soqs86p.mongodb.net/');
}

server.use(express.json())
server.use('/api/v1',productRouter.router)

// console.log('env',process.env.DB_PASSWORD)
server.listen(process.env.PORT,()=>{
    console.log("Server Started")
})