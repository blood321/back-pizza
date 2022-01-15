const express = require('express');
const {postCategory, getCategoryId, putCategory, deleteCategory} = require('../controller/category.controller');

const router = express.Router();

router.get('/category', getCategoryId);
router.post('/category', postCategory);
router.put('/category', putCategory);
router.delete('/category', deleteCategory);
