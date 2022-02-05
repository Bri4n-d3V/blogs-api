// const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

/* const joiSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  // email: Joi.string().email().required(),
  // password: Joi.string().length(6).required(),
}); */

const validateName = (name) => {
  if (!name || name.length < 8) {
 return { 
    status: 400, 
    message: '"displayName" length must be at least 8 characters long' }; 
}
};

const validateEmail = async (email) => {
  if (!email) {
    return {
      status: 400,
      message: '"email" is required',
    };
  }

  const regex = /\w+@\w+\.\w+/;
  if (!regex.test(email)) {
    return {
      status: 400,
      message: '"email" must be a valid email',
    };
  }

  const findEmail = await User.findOne({ where: { email } });
  if (findEmail) {
    return { status: 409, message: 'User already registered' };
  }
};

const validatePassword = (password) => {
  if (!password) {
    return { status: 400, message: '"password" is required' };
  }

  if (password.length !== 6) {
    return { status: 400, message: '"password" length must be 6 characters long' };
  }
};

const validateToken = async (authorization) => {
  try {
  await jwt.verify(authorization, process.env.SECRET);
  return false;
  } catch (err) {
    return { status: 401, message: 'Expired or invalid token' };
  }
};

module.exports = { /* joiSchema, */ validateName, 
  validateEmail,
validatePassword,
validateToken };