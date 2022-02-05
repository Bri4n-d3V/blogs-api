const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', rescue(UserController.getAll));
router.post('/', /* rescue(User.validateUser), */ rescue(UserController.createUser));

module.exports = router;