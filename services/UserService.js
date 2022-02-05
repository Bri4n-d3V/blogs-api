const jwt = require('jsonwebtoken');
const { User } = require('../models');
const UserSchema = require('../schemas/UserSchema');

const getAll = async () => {
  const user = await User.findAll();

  return user;
};

/* const validateUser = async ({ displayName }) => {
  console.log('displayName Service =>', { displayName });

  const validation = await UserSchema.validate({ displayName });
  console.log('validation.details Service =>', validation.details);
  return validation;
}; */

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
    const token = jwt.sign(body, process.env.SECRET,
       { algorithm: 'HS256', expiresIn: 300 });
    return { status: 201, message: { message: token } };
};

module.exports = {
  getAll,
  createUser,
};