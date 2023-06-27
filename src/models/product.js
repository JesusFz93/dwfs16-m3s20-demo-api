const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    name: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        unique: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    available: {
        type: Boolean,
        default: true
    },
});

module.exports = model("product", ProductSchema, "products");