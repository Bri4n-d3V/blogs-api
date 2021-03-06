const UserService = require('../services/UserService');

const getAll = async (req, res) => {
  const { authorization } = req.headers;

    const user = await UserService.getAll(authorization);
    res.status(user.status).json(user.message);
};

const createUser = async (req, res) => {
  const user = await UserService.createUser(req.body);

  return res.status(user.status).json(user.message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;

  const user = await UserService.getById(id, authorization);

  return res.status(user.status).json(user.message);
};

module.exports = { getAll, createUser, getById };