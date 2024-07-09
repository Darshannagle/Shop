
const express = require('express');
const OTP = require('../model/OTP');
const { where } = require('sequelize');
const route_OTP = express.Router()

route_OTP.post("/",async (req,res,next)=>{
    const { otp } = req.body;

    if (!otp) {
        return res.status(400).send("Enter a valid OTP");
    }
    
    try {
        const savedOTP = await OTP.findOne({ where: { otp: otp } });
    console.log(savedOTP);
        if (!savedOTP) {
            return res.status(400).send("Either OTP expired or does not exist");
        }
    console.log(savedOTP.getDataValue('generationTime'));
        const currentTimeInSeconds = Math.floor(Date.now() / 1000);
        const otpExpirationTimeInSeconds = Math.floor(Number(savedOTP.getDataValue('generationTime'))) + 600; // Convert savedOTP.generationTime to seconds
        console.log(currentTimeInSeconds,":",otpExpirationTimeInSeconds  );
    
        if (currentTimeInSeconds > otpExpirationTimeInSeconds) {
            return res.status(400).send("OTP has expired");
        }
            await OTP.destroy({where:{otp:otp}})
        return res.status(200).send("User verified successfully");
    
    } catch (error) {
        console.error("Error occurred during OTP verification:", error);
        return res.status(500).send("Internal Server Error");
    }
    
})
module.exports = route_OTP