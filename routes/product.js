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