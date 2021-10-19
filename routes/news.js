const Route = require('express').Router();
const controller = require('../controller/news');
const {tryCatch} = require('../middlewares/tryCatch');
// const {multipleUpload, checkFile} = require('../middlewares/file');

Route.get('/', tryCatch(controller.getAll));
Route.get('/:id', tryCatch(controller.getById));
Route.post('/', tryCatch(controller.create));
Route.put('/:id', tryCatch(controller.update));
Route.delete('/:id', tryCatch(controller.deleteById));

module.exports = Route;