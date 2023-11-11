const express = require('express')
const morgan = require('morgan')
const productRouter = require('./routes/product');
require('dotenv').config()

// const index = fs.readFileSync('index.html', 'utf-8');



const server = express();

server.use(express.json())
server.use('/api/v1',productRouter.router)

// console.log('env',process.env.DB_PASSWORD)
server.listen(process.env.PORT,()=>{
    console.log("Server Started")
})