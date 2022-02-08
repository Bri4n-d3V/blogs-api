const { BlogPost, User, Category } = require('../models');
const BlogPostSchema = require('../schemas/BlogPostSchema');

const createBlogPost = async (body, authorization) => {
  const validateToken = await BlogPostSchema.validateToken(authorization);
  if (validateToken) return validateToken;
  
  const { title, content, categoryIds } = body;

  const verifyBody = BlogPostSchema.validateBody(title, content, categoryIds);
  if (verifyBody) return { status: verifyBody.status, message: verifyBody.message };

  const existentCategoryIds = await BlogPostSchema.existentCategoryIds(categoryIds);
  if (existentCategoryIds) return existentCategoryIds;

  const blogPost = await BlogPost.create(body);
  return { status: 201, message: blogPost };
};

const getAll = async (authorization) => {
  const validateToken = await BlogPostSchema.validateToken(authorization);
  if (validateToken) return validateToken;

  const users = await User.findAll();
  const categories = await Category.findAll();
  const blogPosts = await BlogPost.findAll();

  const postMap = blogPosts.map(({ id, title, content, userId, published, updated }, i) =>
   (
    { id,
      title,
      content,
      userId,
      published,
      updated,
      user: users[i],
      categories: [categories[i]] }
    ));

  return { status: 200, message: postMap };
};

module.exports = { createBlogPost, getAll };