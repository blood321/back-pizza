const express = require('express');
const productController = require('../controller/product.controller');

const router = express.Router();

router.get('/product', productController)
