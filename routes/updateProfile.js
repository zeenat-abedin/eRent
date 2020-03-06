const express = require('express')
const router = express.Router()
const userModel = require('../model/User')
const sellerModel = require('../model/sellerProducts')
router.get('/:userId', async (req, res) => {
  await userModel.findAll({
    where: {
      user_uid: req.params.userId
    }
  }).then((result) => res.status(200).json(result)).catch((err) => res.status(400).json(err))
})

router.post('/updateprofile/:userId', async (req, res) => {
  await userModel.update({ full_name: req.body.full_name, phone_number: req.body.phone_number },
    { where: { user_uid: req.params.userId } }).then((res) =>
      res.json("success")).catch((err) => res.json("err"))
})
router.get('/sellerproducts/:userId', async (req, res) => {
  await sellerModel.findAll({
    where: {
      userId: req.params.userId
    }
  }).then((result) => { res.status(200).json(result) }).catch((err) => { res.status(400).send("err") })
})
module.exports = router
