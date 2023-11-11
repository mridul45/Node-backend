
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
            rating: 4,
            description: "fuwbfuwfbuwfbwufbwufbwufbue"
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


exports.getAllProducts = async (req,res) => {

    const products = await Product.find()
    res.json(products)
}


exports.getSingleProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};