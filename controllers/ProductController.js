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
ProductController.addAllProducts = async (req, res) => {
    try {
        const products = await Product.bulkCreate(req.body)
        res.status(201).send(products);
        
    } catch (error) {
        console.log(error);
res.status(500).json({error:error.message});        
    }
}

ProductController.updateProduct = async (req,res,next)=>{
    const product = await Product.update(req.body,{where:{product_id:req.params.id}})
     (product[0]==1) ?
        res.status(200).json({message:"Product updated successfully"})
:        res.status(400).json({message:"Can\'t update product"})
}

ProductController.deleteProduct= async (req,res,next)=>{

    try {
    const id = Number(req.params.id); 
    const r = await Product.destroy({where:{product_id:id}});
        (r==1)? res.status(200).json({message:"Product deleted successfully"}) :res.send(400).json({message:"Can\'t delete product "})

} catch (error) { res.send(error.message)}
}





module.exports = ProductController