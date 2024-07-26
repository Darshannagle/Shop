const express = require('express')
const { authenticateAdmin } = require('../middleware/middleware');

const ProductController = require('../controllers/ProductController');
const route_Product = express.Router();
route_Product.get('/:page?', ProductController.getProducts)
route_Product.post('/',authenticateAdmin, ProductController.addProduct)
route_Product.post('/all',authenticateAdmin, ProductController.addAllProducts)
route_Product.put('/:id',authenticateAdmin, ProductController.updateProduct)

route_Product.delete('/:id',authenticateAdmin, ProductController.deleteProduct)

module.exports = route_Product;