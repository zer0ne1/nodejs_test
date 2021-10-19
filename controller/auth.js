const db = require('../utils/db');
const security = require('../utils/security');
const mail = require('../services/mail');

const register = async (req, res) => {
    const user = await db.users.findOne({
        where: {email: req.body.email}
    });
    if(user) res.status(409).send('User already exists!');
    else {
        await db.users.create(req.body);
        res.send('register successfully');
    }
}

const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await db.users.findOne({
        where: {
            email: email, 
            password: password
        }
    });
    if(!user) res.status(401).send('Unauthorized');
    else{

        const token = security.generateToken({id: user.id}, '600s');
        res.send(token);
        // console.log(token);
    //     try{
    //     mail(token, user.dataValues.email)
    //     res.send('Success!');
    //     }
    //     catch(error){
    //         res.status(400).send('Bad request!');
    //     }
    }
}

module.exports = {
    register,
    login
}