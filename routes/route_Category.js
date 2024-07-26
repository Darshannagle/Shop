const express = require('express')
const Category = require('../model/Category');
const { Op } = require('sequelize');
const CategoryController = require('../controllers/CategoryController');
const { authenticateAdmin } = require('../middleware/middleware');
const route_Category = express.Router();

route_Category.get('/', CategoryController.get_Categories);
route_Category.post('/',authenticateAdmin,CategoryController.add_Category)
route_Category.put('/:id',authenticateAdmin,CategoryController.update_Category )
route_Category.delete('/:id',authenticateAdmin,CategoryController.delete_Category )


module.exports = route_Category