const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken = (req, res, next) =>{
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try{
    const verfied = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.user = verfied;
    next();
    }catch (error){
        return res.status(403).json({ error: 'Invalid token' });
    }
}

module.exports = authenticateToken;