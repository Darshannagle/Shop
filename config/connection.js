const Sequlize = require('sequelize')
const sequlize = new Sequlize('test','root','',{
    dialect:'mysql',
    host:'localhost'
})
module.exports = sequlize;