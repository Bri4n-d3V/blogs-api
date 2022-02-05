const CategoryService = require('../services/CategoryService');

const createCategory = async (req, res) => {
  const { authorization } = req.headers;

  const category = await CategoryService.createCategory(req.body, authorization);

  return res.status(category.status).json(category.message);
};

module.exports = { createCategory };