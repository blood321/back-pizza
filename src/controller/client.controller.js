
const Client = require('../models/client.js');

const postClient = async (req, res) => {
    try {
        const { name, address, phone } = req.body
        const client = await Client.create({ name, address, phone })
        res.send(client)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const getClientId = async (req, res) => {
    let id = req.query._id
    try {
        const client = await Client.findOne({ _id: id })
        client ? res.send(client) : res.send('This client not exist')
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const putClient = async (req, res) => {
    let id = req.query._id
    const { name, address, phone} = req.body
    try {
        const client = await Client.findOneAndUpdate({ _id: id }, { name, address, phone })
        res.send(client)
        if (!name || !address || !phone) { res.send('Faltan datos'); }
    }
    catch (err) {
        res.status(500).send(err)
    }
}

const deleteClient = async (req, res) => {
    let id = req.query._id
    try {
        const client = await Client.findByIdAndDelete({ _id: id })
        res.send(client)
    }
    catch (err) {
        res.status(500).send(err)
    }
}


module.exports = {
postClient,
getClientId,
putClient,
deleteClient
}
