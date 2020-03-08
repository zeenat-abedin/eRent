const express = require('express')
const router = express.Router()
const sellerModel = require('../model/sellerProducts')
router.get('/:id', async (req, res) => {
  await sellerModel.destroy({
    where: {
      id: req.params.id
    }
  }).then((result) => res.status(200).send("success")).catch((err) => res.status(400).send("error"))
})

module.exports = router
