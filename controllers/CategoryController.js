const { Op } = require("sequelize");
const Category = require("../model/Category");

class CategoryController {

    async get_Categories(req, res, next) {
        try {
            const list = await Category.findAll();
            console.log(list);
            res.status(200).send(list)
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

    async add_Category(req, res, next) {
        try {
            // decToken = jwt.verify("PRIVATEKEY")
            var data = req.body

            const cat = await Category.create(data);
            res.status(200).json(cat)
        } catch (error) {
            console.log(error);
            res.status(500).send(error.message)
        }
    }

    async update_Category(req, res, next)  {
        try {
            var id = req.params.id;
            const item =await Category.update(req.body, {where:{cat_id:{[Op.eq]:id}}});
            res.status(200).send(item)
        } catch (error) {
            console.log(error);
    
            res.status(500).send(error.message)
        }
    }

    async delete_Category(req, res, next) {
        try {
            var id = req.params.id;
            const item =await Category.destroy({where:{cat_id:{[Op.eq]:id}}});
            res.status(200).json(item)
        } catch (error) {
            console.log(error);
    
            res.status(500).send(error.message)
        }
    }
}
module.exports = new CategoryController();