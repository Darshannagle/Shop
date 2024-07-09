const express = require('express')

const SubCategoryController = require('../controllers/SubCategoryController')
const route_SubCategory = express.Router()

route_SubCategory.get('/',SubCategoryController.getSubCategories)
route_SubCategory.post('/',SubCategoryController.addSubCategory)
route_SubCategory.put('/:id', SubCategoryController.updateSubCategory)
route_SubCategory.delete('/:id',SubCategoryController.deleteSubCategory );


module.exports = route_SubCategory




