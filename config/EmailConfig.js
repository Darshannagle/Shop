const nodemailer = require('nodemailer');
const service = require('../services/service');
const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth: {
        user: 'nagledarshan12@gmail.com',
        pass: "szhf famr hagq xrxv"
    }
})



const sendEmail = (userMail,subject,content)=>{
    const mailOptions = {
        from : 'nagledarshan12@gmail.com',
        to:userMail.trim(),
        subject:subject ,
        text:content
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if (err) {
            console.log("error: ",err);
            return false;
        } else {
            console.log("email.sent:",info.response);
            return true;
        }
    })
    
}
module.exports.sendEmail = sendEmail;