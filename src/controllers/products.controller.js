const Product = require("../models/product.model");

module.exports = {
    async create(req, res){
        const {product_name, product_description, product_price, qtd_products} = req.body;
        let data = {};
        let product = await Product.findOne({product_name});

        if(!product){
            data = {product_name, product_description, product_price, qtd_products}
            product = await Product.create(data);
            return res.status(200).json(product);
        }else{
            return res.status(400).json(product);
        }
    },
    async index(req, res){
        const product = await Product.find();
        res.json(product);
    },
    async details(req, res){
        const {_id} = req.params;
        const product = await Product.findOne({_id});
        res.json(product);
    },
    async delete(req, res){
        const {_id} = req.params;
        const product = await Product.findOneAndDelete({_id})
        return res.json(product);
    },
    async update(req, res){
        const {_id, product_name, product_description, product_price, products_amount} = req.body;
        const data = {product_name, product_description, product_price, products_amount};
        const product = await Product.findOneAndUpdate({_id}, data, {new:true});
        res.json(product);
    }
};

