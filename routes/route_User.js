const express = require('express');
const route_User = express.Router();
const UserController = require('../controllers/UserController');
const upload = require('../config/UploadConfig');
route_User.post('/signup', upload.single("userfile") ,UserController.SignUp );

route_User.post('/login', UserController.Login);

module.exports = route_User;
