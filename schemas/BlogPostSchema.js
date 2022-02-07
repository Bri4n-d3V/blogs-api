const UserSchema = require('./UserSchema');
const { Category } = require('../models');

const validateTitle = (title) => {
  if (!title) {
    return {
      status: 400,
      message: '"title" is required',
    };
  }
};

const validateContent = (content) => {
  if (!content) {
    return {
      status: 400,
      message: '"content" is required',
    };
  }
};

const validateCategoryIds = (categoryIds) => {
  if (!categoryIds) {
    return {
      status: 400,
      message: '"categoryIds" is required',
    };
  }
};

const validateBody = (title, content, categoryIds) => {
  const verifyTitle = validateTitle(title);
  if (verifyTitle) {
    return { status: verifyTitle.status, 
    message: { message: verifyTitle.message } }; 
  }

  const verifyContent = validateContent(content);
  if (verifyContent) {
    return { status: verifyContent.status, 
    message: { message: verifyContent.message } }; 
  }
  
  const verifyCategoryIds = validateCategoryIds(categoryIds);
  if (verifyCategoryIds) {
    return { status: verifyCategoryIds.status, 
    message: { message: verifyCategoryIds.message } }; 
  }
};

const validateToken = async (authorization) => {
  if (!authorization) {
 return {
    status: 401,
    message: {
      message: 'Token not found' },
  }; 
}

  const validate = await UserSchema.validateToken(authorization);
  if (validate) {
    return {
      status: validate.status,
      message: {
        message: validate.message },
    };
  }
};

const existentCategoryIds = async (categoryIds) => {
  const allCategories = await Category.findAll();
  const ids = allCategories.map((category) => category.id);
  /* console.log('categoryIds =>', categoryIds);
  console.log('ids =>', ids); */
  
  const match = categoryIds.map((ID) => ids.some((id) => ID === id))
  .every((element) => element === true);

  // console.log('match =>', match);

  if (!match) {
    return {
      status: 400,
      message: { message: '"categoryIds" not found' },
    };
  }
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategoryIds,
  validateBody,
  validateToken,
  existentCategoryIds,
};