const express = require("express");
const router = express.Router();
const productModel = require('../model/sellerProducts')
router.get('/:location', async (req, res) => {
  let data = await productModel.findAll({
    where: {
      city: req.params.location
    }
  })
    .then(result => {
      res.json(result)
    }).catch(err => {
      console.log(err)
      res.send(err)
    })
})
router.get(`/search/:searchValue`, async (req, res) => {
  await tedData.findAll({
    where: {
      [Sequelize.Op.or]: [{ bedrooms: req.params.searchValue }, { city: req.params.searchValue }]
    }
  }).then((result) => { res.status(200).json(result) }).catch((err) => res.status(400).send("Searched value is not available"))
})
module.exports = router
