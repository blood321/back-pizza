const Product = require('../models/product.js');

const postProduct = async (req, res) => {
    try {
        const { title, desc, prices, img } = req.body
        const product = await Product.create({ title, desc, prices, img })
        res.send(product)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

 const getProductId = async (req, res) => {
    let id = req.query._id
    try {
        const product = await Product.findOne({ _id: id })
        product ? res.send(product) : res.send('This Product not exist')
    }
    catch (err) {
        res.status(500).send(err)
    }
}

 const putProduct = async (req, res) => {
    let id = req.query._id
    const { title, desc, img, prices } = req.body
    try {
        const product = await Product.findOneAndUpdate({ _id: id }, { title, desc, img, prices })
        res.send(product)
        if (((!title || !desc) || !img) || !prices) { res.send('Faltan datos'); }
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
