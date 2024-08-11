const Product = require('../models/product')
const path = require('path');
const url=require('url')

exports.add_product = async (req, res, next) => {
    let title = req.body.title;
    let imageUrl = req.body.imageUrl;
    let price = req.body.price;
    let stock = req.body.stock;
    let description = req.body.description;
    let parsedUrl = url.parse(imageUrl);
    let imageName = path.basename(parsedUrl.pathname);;
    
    let product = new Product(title, price, description,  imageName,stock );
    
    let result = await product.save();
    if (result) {
        return res.json({message:true});
    }
    return res.json({message:false});
}

exports.getall_product = async (req, res, next) => {
    let AllProducts = await Product.getAllProducts();
    return res.json(AllProducts);
}
exports.delete_product = async (req, res, next) => {
    let _id = req.params.param;
    let result = await Product.deleteById(_id);
    console.log(result);
    res.send("This is for delete product");
}