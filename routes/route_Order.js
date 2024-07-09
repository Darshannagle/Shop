const express = require('express');
require('./route_CartItem');
const route_Order = express.Router();
const { authenticateToken } = require('../middleware/middleware');
const OrderController = require('../controllers/OrderController');
route_Order.use(authenticateToken)

route_Order.get('/',OrderController.getOrder )

route_Order.post("/",OrderController.placeOrder)


module.exports = route_Order;