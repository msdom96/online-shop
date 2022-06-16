const Sequelize = require('sequelize');

const sequelize = new Sequelize('node', 'root', 'Joaquim17', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
