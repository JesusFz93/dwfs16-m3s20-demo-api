const obtenerProductos = (req, res) => {
    try {
        return res.json({
            ok: true,
            msg: "Productos obtenidos",
            data: []
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
            data: []
        })
    }
}

const obtenerProducto = (req, res) => {
    try {
        return res.json({
            ok: true,
            msg: "Producto obtenido",
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
            data: []
        })
    }
}

const crearProducto = (req, res) => {
    try {
        return res.status(201).json({
            ok: true,
            msg: "Producto creado",
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
            data: []
        })
    }
}

const actualizarProducto = (req, res) => {
    try {
        return res.json({
            ok: true,
            msg: "Producto actualizado",
            data: {}
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
            data: []
        })
    }
}

const eliminarProducto = (req, res) => {
    try {
        return res.json({
            ok: true,
            msg: "Producto eliminado",
            data: {}
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