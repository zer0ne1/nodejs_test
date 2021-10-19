const Route = require('express').Router();
const controller = require('../controller/auth');
const {tryCatch} = require('../middlewares/tryCatch')

Route.post('/register', tryCatch(controller.register));
Route.post('/login', tryCatch(controller.login));

module.exports = Route;