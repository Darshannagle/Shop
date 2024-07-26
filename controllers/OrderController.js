const { where } = require('sequelize');
const CartItem = require('../model/CartItem');
const Order = require('../model/Order');
const Product = require('../model/Product')

class OrderController{}
OrderController.getOrder = async (req, res) => {

    const user_id = req.user.user_id
    console.log("user Id :",user_id);

    var list = await Order.findAll({ where: { user_id: user_id } });
    console.log(list);
    res.status(200).send(list)
}
OrderController.placeOrder = async (req, res) => {
    try {
        const user_id = req.user.user_id;
        console.log("user:", user_id);
        const cart = await CartItem.findAll({ where: { user_id: user_id } });

        const OrderList = await Promise.all(cart.map(async (i) => {
            const product = await Product.findOne({ where: { product_id: i.dataValues.product_id } });

            const data = {
                user_id: i.dataValues.user_id,
                title: product.title,
                category: product.category,
                subcategory: product.subcategory,
                price: product.price,
                product_id: i.dataValues.product_id,
                quantity: i.dataValues.quantity,
                totalPrice: i.dataValues.totalPrice
            };
            product.stock -= i.dataValues.quantity;
            await product.save();
            return data;
        }));

        console.table(OrderList);
        const createdOrders = await Order.bulkCreate(OrderList);
        res.status(200).send(createdOrders);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'An error occurred while placing the order.' });
    }
};
OrderController.updateOrder = async(req,res)=>{
try {
    var id = req.params.id;
    let data = req.body;
    console.log("data:",data);
    const order =await Order.findOne({where:{order_id:id}});
    console.log("order.product_id ",order.product_id);
    const product = await Product.findOne({ where: { product_id:order.product_id} });
   console.log("product quantity: ",product.stock);
    if (order && data.quantity < product.stock && data.quantity>0) {
        order.quantity+= data.quantity;
        order.totalPrice+=(data.quantity*product.price);

        console.log("order.quantity:",order.quantity);
        await order.save()
        product.stock-=data.quantity;
        await product.save()
        return res.status(200).send(order);
    } else {
        res.status(400).json({message:'can\'t update Order'});

    }

} catch (error) {
    console.log(error);
    res.status(500).send(error.message)

    
}
}




module.exports =  OrderController