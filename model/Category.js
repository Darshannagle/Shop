const { DataTypes } = require("sequelize");
const sequlize = require("../config/connection");

const Category = sequlize.define("category",{
cat_id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
},
category:{
    type:DataTypes.STRING,
    allowNull:false
}

},{
    timestamps:false
})
module.exports = Category