const { Category } = require('../models');
const CategorySchema = require('../schemas/CategorySchema');

const createCategory = async (name, authorization) => {
  if (!authorization) return { status: 401, message: { message: 'Token not found' } };

  const validateToken = await CategorySchema.validateToken(authorization);
  if (validateToken) {
 return { status: validateToken.status,
    message: { message: validateToken.message } }; 
}

  if (Object.keys(name).length === 0) { 
    return { status: 400, message: { message: '"name" is required' } }; 
}

  const category = await Category.create(name);
  console.log('category =>', category);
  return { status: 201, message: category };
};

module.exports = { createCategory };