const express = require('express');
const router = express.Router();
const Categories = require('../models/Category');

router.get('/all', async (req, res) => {
    try {
        const products = await Categories.find({});
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', '*');
        if(req.query.category) {
            const categoryProducts = products.find(item => item.category.toLowerCase() === req.query.category.toLowerCase());
            if(req.query.product) {
                const selectedProduct = categoryProducts.products.find(item => item.name.toLowerCase() === req.query.product.replace(/-/g, ' ').toLowerCase());
                const selectedCategory = {
                  category: categoryProducts.category
                };
                const selectedData = {...selectedCategory, ...selectedProduct._doc};
                if(selectedProduct) {
                    res.send(selectedData)
                } else {
                    res.send('404')
                }
            } else if(categoryProducts) {
                res.send(categoryProducts)
            } else {
                res.send('404')
            }
        } else {
            res.send(products)
        }
    } catch(e) {
        res.send(e);
    }
});

router.post('/addCategory', async (req, res) => {
    const categories = new Categories({
        category: req.body.category,
        products: req.body.products
    });

    try {
        const savedCategory = await categories.save();
        res.send(savedCategory);
    } catch(e) {
        res.send(e);
    }
});

router.post('/addProduct', async (req, res) => {
    const product = {
        "name": req.body.name,
        "img": req.body.img,
        "description": req.body.description,
        "price": req.body.price
    };

    try {
        const savedCategory = await Categories.findOneAndUpdate({category: req.body.category}, {$push: {products: product}});
        res.send(savedCategory);
    } catch(e) {
        res.send(e);
    }

});

module.exports = router;
