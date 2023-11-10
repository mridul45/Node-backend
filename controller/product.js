
const http = require('http');
const fs = require('fs');
const { escape } = require('querystring');

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


exports.createProducts = (req,res) => {
    console.log(req.body)
    products.push(req.body)
    res.json(req.body)
}

exports.updateProducts = (req,res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id===id)

    products.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json({product:'updated'})
}


exports.updateProducts2 = (req,res) => {
    const id = +req.params.id
    const productIndex = products.findIndex(p=>p.id===id)
    const product = products[productIndex]

    products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json()
}


exports.deleteProducts = (req,res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p=>p.id===id)

    const product = products[productIndex]
    products.splice(productIndex,1)

    res.status(201).json(product)
}


exports.getAllProducts = (req,res) => {
    res.json(products)
}


exports.getSingleProduct = (req,res) => {
    const id = +req.params.id
    const product = products.find(p=>p.id===id)
    res.json(req.body)
}


