const { where } = require("sequelize");
const SubCategory = require("../model/Subcategory");
const { UPDATE } = require("sequelize/lib/query-types");

class SubcategoryController{}
SubcategoryController.getSubCategories = async (req,res,next)=>{
    try {
        
        const list = await SubCategory.findAll();
        res.status(200).send(list)
    } catch (error) {
        res.status(500).send(error.message);
    }
}
SubcategoryController.addSubCategory = async (req,res,next)=>{
    try {
        var data = req.body
        var sub = await SubCategory.create(data);
        res.status(200).send(sub)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

SubcategoryController.updateSubCategory = async (req,res,next)=>{
    try {
        var id = req.params.id;
        const item = await SubCategory.update(req.body,{where:{subcat_id:id}})
        res.send(item).status(200)
    } catch (error) {
        
        res.status(500).send(error.message)
    }
}
SubcategoryController.deleteSubCategory= async (req,res,next)=>{

    try {
        var id = req.params.id;
        const item =await SubCategory.destroy({where:{subcat_id:id}})
        res.status(200).json(item)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports =SubcategoryController