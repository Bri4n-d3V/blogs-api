const express = require('express');
const rescue = require('express-rescue');
const LoginController = require('../controllers/LoginController');

const router = express.Router();

router.post('/', rescue(LoginController.login));

module.exports = router;