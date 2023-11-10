# Rest API


```
const http = require('http');
const fs = require('fs');
const { escape } = require('querystring');
const express = require('express')
const morgan = require('morgan')

// const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


const server = express();

server.use(express.json())

server.get('/products',(req,res) => {
    res.json(products)
})

server.get('/products/:id',(req,res) => {
    const id = +req.params.id
    const product = products.find(p=>p.id===id)
    res.json(req.body)
})


server.post('/products',(req,res) => {
    console.log(req.body)
    products.push(req.body)
    res.json(req.body)
})


server.put('/products/:id',(req,res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id===id)

    products.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json({product:'updated'})
})


server.patch('/products/:id',(req,res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id===id)
    const product = products[productIndex]

    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json()
})


server.delete('/products/:id',(req,res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)

    const product = products[productIndex]
    products.splice(productIndex,1)

    res.status(201).json(product)
})

server.listen(8080,()=>{
    console.log("Server Started")
})

```