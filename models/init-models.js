var DataTypes = require("sequelize").DataTypes;
var _news = require("./news");
var _users = require("./users");

function initModels(sequelize) {
  var news = _news(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    news,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
