const express = require("express");

const router = express.Router();
const Product = require("../model/sellerProducts");

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });
    if (!product) {
      return res.json({
        message: "Product not found"
      });
    }

    return res.json({
      data: product
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message
    });
  }
});

module.exports = router;
