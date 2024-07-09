const { where } = require('sequelize');
const CartItem = require('../model/CartItem');
const Order = require('../model/Order');

class OrderController{}
OrderController.getOrder = async (req, res) => {

    const user_id = req.user.user_id
    console.log(user_id);
    var list = await Order.findAll({ where: { user_id: user_id } });
    console.log(list);
    res.status(200).send(list)
}
OrderController.placeOrder = async (req,res)=>{
    const user_id = req.user.user_id;
    var cart = await CartItem.findAll({where:{user_id:user_id}});
    var OrderList = cart.map(i=>{
        var data = {}
        data.user_id = i.user_id;
        data.product_id = i.product_id;
        data.totalPrice = i.totalPrice;
        return data;
    })
    console.log(OrderList);
    OrderList = await Order.bulkCreate(OrderList);
    res.send(OrderList).status(200);

}

module.exports =  OrderController