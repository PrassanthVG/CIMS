const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

router.post('/', async (req, res) => {
    const { name, sku, stockLevel } = req.body;
    const product = new Product({ name, sku, stockLevel });
    await product.save();
    res.json(product);
});

router.put('/:id', async (req, res) => {
    const { stockLevel } = req.body;
    const product = await Product.findByIdAndUpdate(req.params.id, { stockLevel }, { new: true });
    res.json(product);
});

module.exports = router;
