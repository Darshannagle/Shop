const express = require('express')
const ProductController = require('../controllers/ProductController');
const route_Product = express.Router();
route_Product.get('/:page?', ProductController.getProducts)
route_Product.post('/', ProductController.addProduct)
route_Product.put('/:id', ProductController.updateProduct)

route_Product.delete('/:id', ProductController.deleteProduct)

module.exports = route_Product;