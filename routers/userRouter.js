const express = require('express');
const rescue = require('express-rescue');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', rescue(UserController.getAll));
router.post('/', rescue(UserController.createUser));
router.get('/:id', rescue(UserController.getById));

module.exports = router;