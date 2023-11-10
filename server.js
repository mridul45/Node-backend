const express = require('express')
const morgan = require('morgan')
const productRouter = require('./routes/product');

// const index = fs.readFileSync('index.html', 'utf-8');



const server = express();

server.use(express.json())
server.use('/api/v1',productRouter.router)

server.listen(8080,()=>{
    console.log("Server Started")
})