const validateEmail = (email) => {
  if (email === '') return { status: 400, message: '"email" is not allowed to be empty' };
  if (!email) return { status: 400, message: '"email" is required' };
};

const validatePassword = (password) => {
  if (password === '') return { status: 400, message: '"password" is not allowed to be empty' };
  if (!password) return { status: 400, message: '"password" is required' };
};

module.exports = {
  validateEmail,
  validatePassword,
};