const express = require('express');
const Admincontroller = require('../controllers/AdminController');
const route_Admin = express.Router()
route_Admin.post('/signup',Admincontroller.SignUp );
route_Admin.post('/login',Admincontroller.Login );
module.exports = route_Admin