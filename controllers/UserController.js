const UserService = require('../services/UserService');

const getAll = async (_req, res) => {
    const user = await UserService.getAll();

    res.status(200).json(user);
};

const createUser = async (req, res) => {
  const user = await UserService.createUser(req.body);

  return res.status(user.status).json(user.message);
};

module.exports = { getAll, createUser };