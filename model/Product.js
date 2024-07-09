const {DataTypes} = require('sequelize')
const sequelize = require('../config/connection');
const Category = require('./Category');
const SubCategory = require('./Subcategory');
const Product = sequelize.define(
    'product',{
product_id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
},
title:{
    type:DataTypes.STRING,
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
},
stock:{
    type:DataTypes.INTEGER,
    allowNull:false,
}
    },{
        timestamps:false
    }
)


module.exports = Product;