const security = require('../utils/security');

const requireLogin = (req, res, next) => {
    try {
        const headerAuthorized = req.headers.authorization.split(' ')[1];
        if(!headerAuthorized){
            res.status(401).send('Unauthorized');
        }else{
            const decodedToken = security.verifyToken(headerAuthorized);
            if (decodedToken.user) {
                req.user = decodedToken.user;
                next();
            }else{
                res.status(401).send('Unauthorized');
            }
        }
    } catch (error) {
        console.log(error);
        res.status(401).send('Unauthorized');
    }
}

module.exports = {
    requireLogin
}