# MVC Architecture

__Controller product.js__

```

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




```


__routes product.js__


```
const productController = require('../controller/product')
const express = require('express')

const router = express.Router();


router.get('/products',productController.getAllProducts)
router.get('/products/:id',productController.getSingleProduct)
router.post('/products', productController.createProducts)
router.put('/products/:id',productController.updateProducts)
router.patch('/products/:id',productController.updateProducts2)
router.delete('/products/:id',productController.deleteProducts)


exports.router = router;

```


__server.js__


```
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

```