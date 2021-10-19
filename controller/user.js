const db = require('../utils/db');

const get = async (req, res) => {
    const user = await db.users.findAndCountAll()
    res.send(user);
}

const deleteById = async (req, res) => {
    await db.users.destroy({
        where: {id: req.params.id}
    });
    res.send('delete successfully!');
}


module.exports = {
    get,
    deleteById
}