const express = require('express');
const rescue = require('express-rescue');
const CategoryController = require('../controllers/CategoryController');

const router = express.Router();

router.post('/', rescue(CategoryController.createCategory));
router.get('/', rescue(CategoryController.getAll));

module.exports = router;