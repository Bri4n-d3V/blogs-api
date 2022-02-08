const express = require('express');
const rescue = require('express-rescue');
const BlogPostController = require('../controllers/BlogPostController');

const router = express.Router();

router.post('/', rescue(BlogPostController.createBlogPost));
router.get('/', rescue(BlogPostController.getAll));

module.exports = router;