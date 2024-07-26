const Sequlize = require('sequelize')
require('dotenv').config()
const DB=process.env.DB
const DB_USER=process.env.DB_USER
const DB_PASSWORD=process.env.DB_PASSWORD
const sequlize = new Sequlize(DB,DB_USER,DB_PASSWORD,{
    dialect:'mysql',
    host:'localhost'
})
module.exports = sequlize;