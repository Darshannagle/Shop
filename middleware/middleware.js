const jwt = require('jsonwebtoken');

class middleware{
    authenticateToken = (req, res, next) => {
        const authHeader = req.headers['authorization'];
        console.log(authHeader);
        const token = authHeader && authHeader.split(' ')[1];
        console.log(token);
    
        if (token == null) {
            return res.status(400).send("Please Login");
            
        }
        jwt.verify(token, "PRIVATEKEY", (err, user) => {
            if (err) {
                return res.status(403).send("please Login")
            } else {
                req.user = user;
                console.log(user);
                next();
            }
        })
    
    }
}
module.exports = new middleware()