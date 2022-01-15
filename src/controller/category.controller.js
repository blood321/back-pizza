const Category = require('../models/category.js');

const postCategory = async (req, res) => {
    try {
        const { title } = req.body
        const category = await Category.create({title})
        res.send(category)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const getCategoryId = async (req, res) => {
    let id = req.query._id
    try {
        const category = await Category.findOne({ _id: id })
        category ? res.send(category) : res.send('This category not exist')
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const putCategory = async (req, res) => {
    let id = req.query._id
    const { title } = req.body
    try {
        const category = await Category.findByIdAndUpdate({ _id: id }, { title})
        res.send(category)
        if (!title) { res.send('Faltan datos'); }
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const deleteCategory = async (req, res) => {
    let id = req.query._id
    try {
        const category = await Category.findByIdAndDelete({ _id: id })
        res.send(category)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

module.exports={
  postCategory,
  getCategoryId,
  putCategory,
  deleteCategory
}
