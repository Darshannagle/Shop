const express = require('express');
require('./route_CartItem');
const route_Order = express.Router();
const OrderController = require('../controllers/OrderController');
const { authenticateToken } = require('../middleware/middleware');
route_Order.use(authenticateToken)

route_Order.get('/',OrderController.getOrder )

route_Order.post("/",OrderController.placeOrder)
route_Order.put("/:id",OrderController.updateOrder)


module.exports = route_Order;