const OTP = require("../model/OTP");

class service{}

service.generate_and_save_OTP = async (email)=>{

    var otp = Math.floor(1000000+Math.random()*900000);
    console.log(otp);

     var gen = await OTP.create({email,otp});
     console.log(otp);
     return otp;
}



module.exports = service;