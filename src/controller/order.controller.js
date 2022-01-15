const Order = require('../models/order.js');

const postOrder = async (req, res) => {
    try {
        const { total, desc, client } = req.body
        const order = await Order.create({ total, desc, client })
        res.send(order)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const getOrderId = async (req, res) => {
    let id = req.query._id
    let { client } = req.query

    try {
        if (client) {
            let order = await Order.find({ client }, { createAt: 0 })
                .sort({ createAt: -1 });
            res.send(order)
        }
        else {
            let order = await Order.findOne({ _id: id })
            client ? res.send(order) : res.send('This order not exist')
        }
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const putOrder = async (req, res) => {
    let id = req.query._id
    const { total, desc, client, status } = req.body
    try {
        const order = await Order.findByIdAndUpdate({ _id: id }, { total, desc, client, status })
        res.send(order)
        if ((!total || !desc) || !client) { res.send('Faltan datos'); }
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const deleteOrder = async (req, res) => {
    let id = req.query._id
    try {
        const order = await Order.findByIdAndDelete({ _id: id })
        res.send(order)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

module.exports = {
    postOrder,
    getOrderId,
    putOrder,
    deleteOrder
}
