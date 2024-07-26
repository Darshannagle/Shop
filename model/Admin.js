const { DataTypes } = require("sequelize")
const sequelize = require("../config/connection")
const bcrypt = require('bcrypt')
const Admin = sequelize.define('admin',{
    admin_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    email:{
type:DataTypes.STRING,
allowNull:false,
unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    timestamps:false
})
Admin.beforeCreate(async (admin)=>{
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(admin.password,salt);
})
module.exports = Admin