const jwt = require('jsonwebtoken');
const {secretKey} = require('../config');

const generateToken = (user, expiresIn) => {
    const token = jwt.sign({user}, secretKey,
    {
        expiresIn: expiresIn
    });
    return token;
}

const verifyToken = (token) => {
    const data = jwt.verify(token, secretKey);
    return data;
}

module.exports = {
    generateToken,
    verifyToken
}