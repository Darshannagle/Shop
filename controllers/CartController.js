const sequlize = require("../config/connection");
const CartItem = require('../model/CartItem');
require('sequelize/lib/query-types');
const { Op, Sequelize } = require('sequelize');
const Product = require('../model/Product');


class CartController{}
CartController.getCart = async (req, res) => {
    try {
        var id = req.user.user_id;
        console.log("id:", id);
        const list = await sequlize.query(`
    SELECT c.cart_id, p.product_id, c.product_id AS cart_product, p.price, p.stock, c.quantity, c.user_id
    FROM test.products p
    RIGHT JOIN test.cartitems c ON p.product_id = c.product_id AND c.user_id = :user_id
`, {
            replacements: { user_id: id },
            type: Sequelize.QueryTypes.SELECT
        });

        console.log(list);
        res.status(200).send(list)
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
}

CartController.updateCart =  async (req, res) => {
        var data = req.body;
        try {
        var id = req.params.id;
        var product = Product.findOne({ where: { product_id: data.product_id } })
        if (product) {

            if (req.body.quantity > 0) {
                const item = await CartItem.update(req.body, { where: { cart_id: { [Op.eq]: id } } });
                res.status(200).send(item)

            } else {

                await CartItem.destroy({ where: { cart_id: id } });


                res.status(400).send("cant update CartItem ")

            }
        }
        else {
            res.status(400).send("Product not exist ")

        }
    } catch (error) {
        console.log(error);
        
        res.status(500).send(error)
    }
}
CartController.addCart = async (req, res) => {
    try {
        var data = req.body;
        data.user_id = req.user.user_id;
        console.log(req.body);
        var product = await Product.findOne({ where: { product_id: data.product_id } })
        var exCart = await CartItem.findOne({ where: { product_id: data.product_id, user_id: req.user.user_id } })
        if (product && data.quantity > 0) {
            if (exCart) {
                console.log(exCart);

                exCart.quantity += data.quantity;
                exCart.totalPrice += (product.price * data.quantity);
                exCart = await exCart.save()
                res.send(exCart).status(201);


            } else {
                data.totalPrice = data.quantity * product.price;
                console.log('final Product :', data);
                var cart = await CartItem.create(data);
                res.status(201).send(cart)

            }
        }
        else {
            res.status(400).send("can't add to Cart");

        }

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
}

CartController.deleteCart =  async (req, res) => {
    try {
        var id = req.params.id;
        const item = await CartItem.destroy({ where: { cart_id: { [Op.eq]: id } } });
        res.status(200).json(item)
    } catch (error) {
        console.log(error);

        res.status(500).send(error)
    }
}

module.exports = CartController