const jwt = require('jsonwebtoken');
const { User } = require('../models');
const UserSchema = require('../schemas/UserSchema');

const getAll = async (authorization) => {
  console.log('authorization =>', authorization);

  if (!authorization) return { status: 401, message: { message: 'Token not found' } };

    const validateToken = await UserSchema.validateToken(authorization);
    console.log('validateToken =>', validateToken);

    if (validateToken) {
      return { status: validateToken.status,
      message: { message: validateToken.message } }; 
    }

  const users = await User.findAll();
  return { status: 200, message: users };
};

const createUser = async (body) => {
  const { displayName, email, password } = body;

    const validateName = UserSchema.validateName(displayName);
    const validateEmail = await UserSchema.validateEmail(email);
    const validatePassword = UserSchema.validatePassword(password);

    if (validateName) {
      return { status: validateName.status, message: { message: validateName.message } };
    }
    if (validateEmail) {
      return { status: validateEmail.status, message: { message: validateEmail.message } }; 
    }
    if (validatePassword) {
      return { status: validatePassword.status, message: { message: validatePassword.message } }; 
    }

    await User.create(body);
    const token = jwt.sign(body, process.env.JWT_SECRET,
       { algorithm: 'HS256', expiresIn: '1d' });
    return { status: 201, message: { token } };
};

const getById = async (id, authorization) => {
  if (!authorization) return { status: 401, message: { message: 'Token not found' } };
  
  const validateToken = await UserSchema.validateToken(authorization);
  if (validateToken) {
 return { status: validateToken.status,
    message: { message: validateToken.message } }; 
}

  const user = await User.findByPk(id);

  if (!user) return { status: 404, message: { message: 'User does not exist' } };

  return { status: 200, message: user };
};

module.exports = {
  getAll,
  createUser,
  getById,
};