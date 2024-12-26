const express = require('express');
const Order = require('../models/Order');
const Product = require('../models/Product');
const router = express.Router();

router.post('/', async (req, res) => {
    const { platform, productID, quantity } = req.body;
    const order = new Order({ platform, productID, quantity });
    await order.save();

    const product = await Product.findById(productID);
    product.stockLevel -= quantity;
    await product.save();

    res.json(order);
});

module.exports = router;
