const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define the schema for products
const ProductSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
}, { collection: 'products' }); // Specify the collection name as 'product'

module.exports = mongoose.model('Product', ProductSchema);