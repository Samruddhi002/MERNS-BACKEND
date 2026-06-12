const Product = require('../models/productModel');


// controllers/productController.js
exports.getAllProducts = async (req, res) => {
    try {
        const users = await Product.find();
        res.json(users); // Sends raw data to the browser
    } catch (error) {
        res.status(500).json({ error: "Database Error" });
    }
};
