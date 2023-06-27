require('dotenv').config();
const express = require('express');
const { dbConnection } = require('./database/config');
const app = express();
const PORT = process.env.PORT || 4000;

dbConnection();
app.use(express.json());

app.get("/api", (req, res) => {
    return res.json({ msg: "Hello World" });
})

app.use("/api/products", require("./routes/products.routes"));

app.listen(PORT, () => {
    console.log(`Servidor en linea en el puerto ${PORT}`);
})