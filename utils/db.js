const Sequelize = require('sequelize');
const initModels = require('../models/init-models');
const {database} = require('../config')

let sequelize = new Sequelize(database.database, database.username, database.password, {
    host: database.host,
    dialect: database.dialect,
    port: database.port
});

sequelize
    .authenticate()
    .then(() => {
        console.log('connection has been established successfully!');
    })
    .catch( err => {
        console.error('Unable to connect to database ', err);
    })

module.exports = initModels(sequelize);