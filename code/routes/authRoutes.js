const express = require('express');
const authController = require('../controllers/authController');
const auth = express.Router();

auth.post('/post', authController.postAuth)

module.exports = auth;