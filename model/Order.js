const { DataTypes } = require("sequelize");
const sequlize = require("../config/connection");
const User = require("./User");
const Product = require("./Product");

const Order = sequlize.define(
    'Order',
    {
        order_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'user_id'
            }
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key: 'product_id'
            }
        }
        , totalPrice: {
            type: DataTypes.INTEGER,

        }



    })
module.exports = Order;