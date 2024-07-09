const Product = require("../model/Product");

class ProductController{}
ProductController.getProducts = async (req,res,next)=>{
    // const list = await Product.findAll();
    var page =  parseInt(req.params.page) || 1;
    console.log(page);
    const limit = 10,offset=( page - 1)*limit;
const list = await Product.findAll({
    limit:limit,
    offset:((offset>0)? offset: 0 )
})
    res.status(200).send( list)
}
ProductController.addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).send(product)
        
    } catch (error) {
res.status(500).send(error)        
    }
}
ProductController.updateProduct = async (req,res,next)=>{
    const product = await Product.update(req.body,{where:{product_id:req.params.id}})
    res.status(200).send(product)
}

ProductController.deleteProduct= async (req,res,next)=>{

    try {
    const id = Number(req.params.id); 
    const r = await Product.destroy({where:{product_id:id}});
        (r==1)? res.send(200) :res.send(400)

} catch (error) { res.send(error.message)}
}





module.exports = ProductController