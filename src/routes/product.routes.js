const express = require('express');
const { postProduct, getProductId, putProduct, deleteProduct} = require('../controller/product.controller');

const router = express.Router();

router.get('/', getProductId)
router.post('/', postProduct)
router.put('/', putProduct)
router.delete('/', deleteProduct)

module.exports = router;