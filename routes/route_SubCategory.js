const express = require('express')
const { authenticateAdmin } = require('../middleware/middleware');

const SubCategoryController = require('../controllers/SubCategoryController')
const route_SubCategory = express.Router()

route_SubCategory.get('/',SubCategoryController.getSubCategories)
route_SubCategory.post('/',[authenticateAdmin],SubCategoryController.addSubCategory)
route_SubCategory.put('/:id',authenticateAdmin, SubCategoryController.updateSubCategory)
route_SubCategory.delete('/:id',authenticateAdmin,SubCategoryController.deleteSubCategory );


module.exports = route_SubCategory




