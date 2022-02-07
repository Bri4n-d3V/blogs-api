const { BlogPost } = require('../models');
const BlogPostSchema = require('../schemas/BlogPostSchema');

const createBlogPost = async (body, authorization) => {
  const validateToken = await BlogPostSchema.validateToken(authorization);
  if (validateToken) return validateToken;
  
  const { title, content, categoryIds } = body;

  const verifyBody = BlogPostSchema.validateBody(title, content, categoryIds);
  console.log('verifyBody =>', verifyBody);
  if (verifyBody) return { status: verifyBody.status, message: verifyBody.message };

  const existentCategoryIds = await BlogPostSchema.existentCategoryIds(categoryIds);
  console.log('existentCategoryIds =>', existentCategoryIds);
  if (existentCategoryIds) return existentCategoryIds;

  const blogPost = await BlogPost.create(body);
  return { status: 201, message: blogPost };
};

module.exports = { createBlogPost };