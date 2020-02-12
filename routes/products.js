
const express = require("express");
const router = express.Router();

router.post('/addProduct', (req, res) => {
  console.log('hello')
  console.log(req.body)
  res.json({ msg: "Success" })
})

module.exports = router