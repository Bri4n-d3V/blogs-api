const LoginService = require('../services/LoginService');

const login = async (req, res) => {
  const user = await LoginService.login(req.body);

  return res.status(user.status).json(user.message);
};

module.exports = { login };