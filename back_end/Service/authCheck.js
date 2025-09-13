const config = require('./config');
const jwt = require('jsonwebtoken');

const authCheck = (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'You are not authorized' });
    }

    jwt.verify(token, "theGreatWallAACBrick", (err, details) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid User' });
        }
        console.log(details) 
        next(); 
    });

}

module.exports = authCheck;
