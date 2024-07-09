const { DataTypes } = require("sequelize");
const sequlize = require("../config/connection");
const Category = require("./Category");

const SubCategory = sequlize.define("subcategory",{
subcat_id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
},
subcategory:{
    type:DataTypes.STRING,
    allowNull:false
},
category:{
    type:DataTypes.INTEGER,
    allowNull:false,
    references:{
        model:Category,
        key:'cat_id'
    }
}

},{
    timestamps:false
})
module.exports = SubCategory