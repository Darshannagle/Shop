const User = require("../model/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require("sequelize");
const {  sendEmail } = require("../config/EmailConfig");
const service = require("../services/service");

const KEY = "PRIVATEKEY";

class UserController { }
UserController.SignUp = async (req, res) => {
  try {
    console.log("file: " + req.file);
    if (!req.file) {
      res.status(413).send('Please upload File ! ' + req.file)
      return;
    }
    const email = req.body.email;
    const password = req.body.password;
    // const { email, password } = JSON.parse( req.body.data);
    const userfile = req.file.originalname;

    const user = await User.create({ email, password, userfile });
    sendEmail(email, "verify your email", `your generated OTP: ${await service.generate_and_save_OTP(email)}`)
    res.status(201).json({ "success": true, "email": user.email, "user_id": user.user_id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
UserController.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    console.log(req.body);
    console.log(email);
    const user = await User.findOne({ where: { email: { [Op.eq]: email } } });
    console.log("user :", user);
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid  password' });
    }
    let token;
    token = await jwt.sign({ email: email, user_id: user.user_id }, KEY, { expiresIn: '1h' });
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports = UserController