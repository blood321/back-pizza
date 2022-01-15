const express = require('express');
const categoryController = require('../controller/category.controller');

const router = express.Router();

router.get('/category', categoryController)
