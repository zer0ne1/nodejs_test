const Route = require('express').Router();
const controller = require('../controller/user');
const {tryCatch} = require('../middlewares/tryCatch');

Route.get('/', tryCatch(controller.get));
Route.delete('/:id', tryCatch(controller.deleteById));

module.exports = Route;