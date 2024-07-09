console.clear()
const express = require('express')
const CartItem = require('../model/CartItem');
const route_CartItem = express.Router()
const { authenticateToken } = require('../middleware/middleware');
const CartController = require('../controllers/CartController');


route_CartItem.use(authenticateToken)

route_CartItem.get('/', [authenticateToken], CartController.getCart)

route_CartItem.post('/',CartController.addCart )

route_CartItem.put('/:id',CartController.updateCart)

route_CartItem.delete('/:id',CartController.deleteCart)
module.exports = route_CartItem;