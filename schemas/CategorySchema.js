const jwt = require('jsonwebtoken');

const validateToken = async (authorization) => {
  try {
  await jwt.verify(authorization, process.env.JWT_SECRET);
  return false;
  } catch (err) {
    return { status: 401, message: 'Expired or invalid token' };
  }
};

module.exports = { validateToken };