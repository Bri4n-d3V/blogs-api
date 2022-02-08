const CategoryService = require('../services/CategoryService');

const createCategory = async (req, res) => {
  const { authorization } = req.headers;

  const category = await CategoryService.createCategory(req.body, authorization);

  return res.status(category.status).json(category.message);
};

const getAll = async (req, res) => {
  const { authorization } = req.headers;
  console.log('authorization =>', authorization);

  const categories = await CategoryService.getAll(authorization);

  return res.status(categories.status).json(categories.message);
};

module.exports = { createCategory, getAll };
