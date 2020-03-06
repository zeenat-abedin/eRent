const Sequelize = require('sequelize')
const sequelize = require('../config/db')

const User = sequelize.define('user', {
  full_name: Sequelize.STRING(50),
  email: Sequelize.STRING(100),
  user_uid: Sequelize.STRING,
  phone_number: Sequelize.CHAR(10)
})

module.exports = User
