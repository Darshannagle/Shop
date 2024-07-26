const jwt = require('jsonwebtoken');
require('dotenv').config()

const ADMIN_SECRET = process.env.ADMIN_SECRET;

class middleware{
    
}
middleware.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    // console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);

    if (token == null) {
        console.log("token is null");
        return res.status(400).json({message:"Please Login"});
        
    }
    jwt.verify(token, "PRIVATEKEY", (err, user) => {
        if (err) {
            console.log(err);
            return res.status(403).json({message:"Please Login"})
        } else {
            req.user = user;
            console.log(user);
            next();
        }
    })
}

middleware.authenticateAdmin = (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    console.log(authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);

    if (token == null) {
        return res.status(400).json({message:"Please Login"});
        
    }
    jwt.verify(token, ADMIN_SECRET, (err, admin) => {
        if (err) {
            return res.status(403).json({message:"Please Login"})
        } else {
            req.admin = admin;
            console.log(admin);
            next();
        }
    })

}
module.exports = middleware