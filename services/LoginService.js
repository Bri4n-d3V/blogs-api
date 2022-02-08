const jwt = require('jsonwebtoken');
const { User } = require('../models');
const LoginSchema = require('../schemas/LoginSchema');

const login = async (body) => {
  const { email, password } = body;

  const validateEmail = LoginSchema.validateEmail(email);
  const validatePassword = LoginSchema.validatePassword(password);

  if (validateEmail) {
  return { status: validateEmail.status,
    message: { message: validateEmail.message } }; 
  }

  if (validatePassword) {
    return { status: validatePassword.status,
    message: { message: validatePassword.message } }; 
  }

    const findUser = await User.findOne({ where: { email, password } });

    if (findUser) {
      const token = jwt.sign(body, process.env.JWT_SECRET,
        { algorithm: 'HS256', expiresIn: 300 });
     return { status: 200, message: { token } };
    }

    if (!findUser) return { status: 400, message: { message: 'Invalid fields' } };
};

module.exports = {
  login,
};