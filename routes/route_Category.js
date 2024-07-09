const express = require('express')
const Category = require('../model/Category');
const { Op } = require('sequelize');
const CategoryController = require('../controllers/CategoryController');
const route_Category = express.Router();

route_Category.get('/', CategoryController.get_Categories);
route_Category.post('/',CategoryController.add_Category)
route_Category.put('/:id',CategoryController.update_Category )
route_Category.delete('/:id',CategoryController.delete_Category )


module.exports = route_Category