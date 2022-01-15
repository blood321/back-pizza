const Product = require('../models/product.js');

const postProduct = async (req, res) => {
    try {
        const { title, desc, prices, img, category } = req.body
        const product = await Product.create({ title, desc, prices, img, category })
        res.send(product)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const getProductId = async (req, res) => {
    let id = req.query._id
    let { category } = req.query
    try {
        if (category) {
            let product = await Product.find({ category }, { createAt: 0 })
                .sort({ createAt: -1 });
            res.send(product)
        }
        else {
            let product = await Product.findOne({ _id: id })
            product ? res.send(product) : res.send('This Product not exist')
        }
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const putProduct = async (req, res) => {
    let id = req.query._id
    const { title, desc, img, prices, category } = req.body
    try {
        const product = await Product.findByIdAndUpdate({ _id: id }, { title, desc, img, prices, category })
        res.send(product)
        if ((((!title || !desc) || !img) || !prices) || !category) { res.send('Faltan datos'); }
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const deleteProduct = async (req, res) => {
    let id = req.query._id
    try {
        const product = await Product.findByIdAndDelete({ _id: id })
        res.send(product)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

module.exports = {
    postProduct,
    getProductId,
    putProduct,
    deleteProduct
}
