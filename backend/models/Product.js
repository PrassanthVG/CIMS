const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    sku: String,
    stockLevel: Number,
});

module.exports = mongoose.model('Product', productSchema);
