const Sequelize = require("sequelize");
require('dotenv').config()
const productSequelize = new Sequelize(
  'eRent', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'DB_HOST',
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
module.exports = productSequelize;
