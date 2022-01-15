const express = require('express');
const orderController = require('../controller/order.controller.js');

const router = express.Router();

router.get('/order', orderController)
