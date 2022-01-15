const express = require('express');
const { postProduct, getProductId, putProduct, deleteProduct} = require('../controller/product.controller');

const router = express.Router();

router.get('/product', getProductId)
router.post('/product', postProduct)
router.put('/product', putProduct)
router.delete('/product', deleteProduct)
