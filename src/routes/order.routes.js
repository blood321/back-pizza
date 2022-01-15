const express = require('express');
const {postOrder, getOrderId, putOrder, deleteOrder} = require('../controller/order.controller');

const router = express.Router();

router.get('/order', getOrderId);
router.post('/order', postOrder);
router.put('/order', putOrder);
router.delete('/order', deleteOrder);
