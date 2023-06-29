const Product = require('../models/product');

const obtenerProductos = async (req, res) => {
    try {

        const products = await Product.find();

        return res.json({
            ok: true,
            msg: "Productos obtenidos",
            data: products
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
            data: []
        })
    }
}

const obtenerProducto = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        return res.json({
            ok: true,
            msg: "Producto obtenido",
            data: product
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
            data: []
        })
    }
}

const crearProducto = async (req, res) => {
    try {
        const { name, price, description, available } = req.body;

        const product = {
            name,
            price,
            description,
            available
        }

        const productoEncontrado = Product.find({ name: name });

        if (productoEncontrado) {
            return res.status(400).json({
                ok: false,
                msg: "El producto ya existe",
                data: {}
            })
        }

        const newProduct = await Product(product).save();

        return res.status(201).json({
            ok: true,
            msg: "Producto creado",
            data: newProduct
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
            data: []
        })
    }
}

const actualizarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, description, available } = req.body;

        const product = {
            name,
            price,
            description,
            available
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });


        return res.json({
            ok: true,
            msg: "Producto actualizado",
            data: updatedProduct
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
            data: []
        })
    }
}

const eliminarProducto = async (req, res) => {
    try {
        const { id } = req.params;

        const deleteProduct = await Product.findByIdAndRemove(id);

        return res.json({
            ok: true,
            msg: "Producto eliminado",
            data: deleteProduct
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
            data: []
        })
    }
}

module.exports = {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}