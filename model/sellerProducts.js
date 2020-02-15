const { Sequelize } = require('sequelize')
const productSequelize = require('../config/productsDb')
const products = productSequelize.define('sellerProducts', {
  userId: Sequelize.TEXT(100),
  title: Sequelize.TEXT,
  description: Sequelize.TEXT,
  houseType: Sequelize.TEXT,
  furniture: Sequelize.TEXT,
  maintenanace: Sequelize.INTEGER,
  price: Sequelize.INTEGER,
  area: Sequelize.INTEGER,
  listedBy: Sequelize.TEXT,
  state: Sequelize.TEXT,
  city: Sequelize.TEXT,
  landmark: Sequelize.TEXT,
  bedrooms: Sequelize.TEXT,
  parking: Sequelize.TEXT,
  floorCount: Sequelize.INTEGER,
  floorNumber: Sequelize.INTEGER,
  images: Sequelize.ARRAY(Sequelize.TEXT),
  status: Sequelize.TEXT,
})
module.exports = products
