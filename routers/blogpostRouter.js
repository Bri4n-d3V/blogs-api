const express = require('express');
const rescue = require('express-rescue');
const BlogPostController = require('../controllers/BlogPostController');

const router = express.Router();

router.post('/', rescue(BlogPostController.createBlogPost));

module.exports = router;