const BlogPostService = require('../services/BlogPostService');

const createBlogPost = async (req, res) => {
  const { authorization } = req.headers;
  const blogPost = await BlogPostService.createBlogPost(req.body, authorization);

  return res.status(blogPost.status).json(blogPost.message);
};

const getAll = async (req, res) => {
  const { authorization } = req.headers;
  
  const blogPost = await BlogPostService.getAll(authorization);

  return res.status(blogPost.status).json(blogPost.message);
  };

module.exports = { createBlogPost, getAll };