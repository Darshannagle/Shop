const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Admin = require("../model/Admin");
const { where } = require('sequelize');
require('dotenv').config()
const ADMIN_SECRET = process.env.ADMIN_SECRET;
class Admincontroller  {}
Admincontroller.SignUp = async (req,res)=>{
    try {
        const {email,password} = req.body
        const admin = await Admin.create({email,password})
        res.status(201).json({message:`Admin with email :  ${email} created Successfully`})
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}
Admincontroller.Login = async (req,res)=>{
    try {
        const {email,password}  = req.body;
        const admin = await Admin.findOne({where:{email:email}})
        if (!admin) {
            return res.status(400).json({error:"Invalid email or password"})
        }
        const isMatch = await bcrypt.compare(password,admin.password);
        if (!isMatch) {
            return res.status(400).json({error:'Invalid password'})
        }
        let token ;
        token = await jwt.sign({email,email,admin_id:admin.admin_id},ADMIN_SECRET);
    // , { expiresIn: '1h' }
  res.status(200).json({token:token});

} catch (error) {
    res.status(500).json({ error: error.message });
        
    }
}
module.exports = Admincontroller