const express = require("express");

const router = express.Router();
const User = require("../model/User");

router.post("/", async (req, res) => {
  const { userId, displayName, email, phone } = req.body;

  try {
    const checkEmail = await User.findOne({ where: { email } });

    if (checkEmail) {
      return res.json({
        message: "Already exists"
      });
    }
    const data = User.create({
      full_name: displayName,
      email,
      user_uid: userId,
      phone_number: phone || 0000000000
    });
    console.log(data.get());
    return res.json({
      message: "User Created"
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: error.message
    });
  }
});

module.exports = router;
