const express = require("express");
const router = express.Router();
const Sequelize = require('sequelize');
const productModel = require('../model/sellerProducts')
router.get(`/:searchValue`, async (req, res) => {
  await productModel.findAll({
    where: {
      [Sequelize.Op.or]: [{ bedrooms: req.params.searchValue }, { city: req.params.searchValue }]
    }
  }).then((result) => { res.status(200).json(result) }).catch((err) => res.status(400).send("Searched value is not available"))
})
module.exports = router
