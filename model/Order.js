const { DataTypes } = require("sequelize");
const sequlize = require("../config/connection");
const User = require("./User");
const Product = require("./Product");
const Category = require("./Category");
const SubCategory = require("./Subcategory");

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
        },
        title:{ type:DataTypes.STRING,
            allowNull:false,
        },
        category:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:Category,
                key:"cat_id"
            }
        }
        ,
        subcategory:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:SubCategory,
                key:"subcat_id"
            }
        }
        ,
        price:{
            type:DataTypes.INTEGER,
            allowNull:false,
        }
        ,
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
        , totalPrice: {
            type: DataTypes.INTEGER,

        }
    })
module.exports = Order;