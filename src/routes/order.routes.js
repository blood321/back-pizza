const express = require('express');
const {postOrder, getOrderId, putOrder, deleteOrder} = require('../controller/order.controller');

const router = express.Router();

router.get('/', getOrderId);
router.post('/', postOrder);
router.put('/', putOrder);
router.delete('/', deleteOrder);

module.exports = router;