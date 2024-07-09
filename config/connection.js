const Sequlize = require('sequelize')
const sequlize = new Sequlize('test','root','dan123',{
    dialect:'mysql',
    host:'localhost'
})
module.exports = sequlize;