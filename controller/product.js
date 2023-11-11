
const http = require('http');
const fs = require('fs');
const { escape } = require('querystring');
const model = require('../model/product')

const Product = model.Product;

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


exports.createProducts = async (req, res) => {
    try {
        const product = new Product({
            title: "Phone X",
            price: 999,
            rating: 5
            // Add other fields as needed
        });

        const savedProduct = await product.save();
        console.log(savedProduct);
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

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


