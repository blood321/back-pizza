const express = require('express');
const product = require('./product.routes');
const client = require('./client.routes');
const order = require('./order.routes');
const category = require('./category.routes');

const app = express.Router();

app.use('/product', product);
app.use('/client', client);
app.use('/order', order);
app.use('/category', category);

module.exports = app;