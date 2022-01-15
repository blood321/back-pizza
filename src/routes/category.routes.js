const express = require('express');
const {postCategory, getCategoryId, putCategory, deleteCategory} = require('../controller/category.controller');

const router = express.Router();

router.get('/', getCategoryId);
router.post('/', postCategory);
router.put('/', putCategory);
router.delete('/', deleteCategory);

module.exports = router;