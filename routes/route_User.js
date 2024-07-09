const express = require('express');
const route_User = express.Router();
const UserController = require('../controllers/UserController');
const upload = require('../config/UploadConfig');
route_User.post('/signup', upload.single("userfile") ,UserController.SignUp );

route_User.post('/login', UserController.Login
//  async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     console.log(req.body);
//     console.log(email);
//     const user = await User.findOne({ where: { email: {[Op.eq]:email} } });
//     console.log("user :", user);
//     if (!user) {
//       return res.status(400).json({ error: 'Invalid email or password' });
//     }
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ error: 'Invalid  password' });
//     }
//     let token;
//     token = await jwt.sign({ email: email ,user_id:user.user_id }, KEY, { expiresIn: '1h' });
//     res.status(200).json({ token: token });
//   } catch (error) {
//     res.status(500).json({ error: error.message });  }
// }
);

module.exports = route_User;
