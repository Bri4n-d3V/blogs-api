const UserService = require('../services/UserService');

const getAll = async (_req, res) => {
    const user = await UserService.getAll();

    res.status(200).json(user);
};

// const validateUser = (req, _res, next) => {
//   const { displayName } = req.body;
//   console.log('displayName Controller =>', { displayName });

//   const validation = UserService.validateUser({ displayName });
//   console.log('validationController =>', validation);
//   console.log('validation.error Controller =>', validation.error);

//   if (validation.error) return next(validation.error);
//   return next();
// };

const createUser = async (req, res) => {
  const user = await UserService.createUser(req.body);

  return res.status(user.status).json(user.message);
};

module.exports = { getAll, createUser };