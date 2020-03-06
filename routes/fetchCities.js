const express = require("express");
const router = express.Router();
const productModel = require('../model/sellerProducts')
router.get('/getcities', async (req, res) => {
  let data = await productModel.findAll({ attributes: ['city'] })
    .then(result => {
      res.json(result)
    }).catch(err => {
      console.log(err)
      res.send(err)
    })

})

module.exports = router
