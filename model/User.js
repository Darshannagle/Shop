const {DataTypes, Deferrable, DATE} = require('sequelize')
const sequelize = require('../config/connection');
const CartItem = require('./CartItem');
const bcrypt = require('bcrypt');
const User = sequelize.define(
    'user',{
user_id:{
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
    allowNull:false,
},
userfile:{
    type:DataTypes.STRING,
    allowNull:false,
},
signupTime: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: Math.floor(Date.now() / 1000), // Default value set to current timestamp in seconds
    get() {
      // Custom getter to convert stored timestamp (in seconds) to Date object
      const createdAtSeconds = this.getDataValue('createdAtSeconds');
      return createdAtSeconds ? new Date(createdAtSeconds * 1000) : null;
    },
    set(value) {
      // Custom setter to store Date object as timestamp in seconds
      this.setDataValue('createdAtSeconds', Math.floor(value.getTime() / 1000));
    }
  },
updationTime:{
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: Math.floor(Date.now() / 1000), // Default value set to current timestamp in seconds
    get() {
      // Custom getter to convert stored timestamp (in seconds) to Date object
      const createdAtSeconds = this.getDataValue('createdAtSeconds');
      return createdAtSeconds ? new Date(createdAtSeconds * 1000) : null;
    },
    set(value) {
      // Custom setter to store Date object as timestamp in seconds
      this.setDataValue('createdAtSeconds', Math.floor(value.getTime() / 1000));
    }   
}

    },{
        timestamps:false,
        }
)

User.beforeCreate(async (user)=>{
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt);
})

module.exports = User;