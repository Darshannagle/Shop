const { DataTypes } = require('sequelize')
const sequlize = require('../config/connection')
const Product = require('./Product')
const User = require('./User')

const CartItem = sequlize.define('CartItem', {
    cart_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'product_id'
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'user_id'
            }
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

CartItem.hasOne(Product, { foreignKey: 'product_id' })
Product.hasMany(CartItem, { foreignKey: 'product_id' })

CartItem.hasOne(User, { foreignKey: 'user_id' })
User.hasMany(CartItem, { foreignKey: 'user_id' })
module.exports = CartItem;