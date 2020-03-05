const express = require("express");
const router = express.Router();
require('dotenv').config()
var upload = require('../config/multer')
const path = require('path')
const bodyParser = require('body-parser')
const cloudinary = require('../config/cloudinary')
const productModel = require('../model/sellerProducts')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())
var nodemailer = require('nodemailer');
var uploadImages = upload.fields([{ name: 'pictureOne', maxCount: 1 }, { name: 'pictureTwo', maxCount: 1 }, { name: "pictureThree", maxCount: 1 }])
router.post('/addProduct', uploadImages, async (req, res, next) => {
  let filePaths = []
  let urls = []
  filePaths.push(req.files.pictureOne[0].path)
  filePaths.push(req.files.pictureTwo[0].path)
  filePaths.push(req.files.pictureThree[0].path)
  let multipleUpload = new Promise(async (resolve, reject) => {
    let upload_len = filePaths.length
    for (let i = 0; i < upload_len; i++) {
      await cloudinary.uploader.upload(filePaths[i], {
        folder: "eRent",
      }, (error, result) => {
        if (result) {
          urls.push(result.secure_url);
        } if (error) {
          console.log(error)
          reject(error)
        } if (upload_len === urls.length) {
          resolve(urls)
        }
      })
    }
  })
    .then((result) => result)
    .catch((error) => error)
  let newUpload = await multipleUpload;
  pictureOne = newUpload[0]
  pictureTwo = newUpload[1]
  pictureThree = newUpload[2]
  const { userEmail, userId, Title, phone_number, Description, houseType, furniture, maintenanace, Price, Area, listedBy, location, City, Landmark, Bedrooms, parking, floorCount, floorNumber,
  } = req.body
  console.log(phone_number)
  if (newUpload.length === filePaths.length) {
    let createProductDetails = await productModel.create({
      userId,
      title: Title,
      description: Description,
      houseType,
      furniture,
      maintenanace,
      price: Price,
      area: Area,
      listedBy,
      state: location,
      city: City,
      landmark: Landmark,
      bedrooms: Bedrooms,
      parking,
      floorCount,
      floorNumber,
      phone_number,
      images: [pictureOne, pictureTwo, pictureThree],
      status: false,
    }).then(result => {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "darisanikhila@gmail.com", // generated ethereal user
          pass: process.env.GMAIL_PASS// generated ethereal password
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        }
      });
      var mailOptions = {
        from: '"eRent"<nikhiladarisa@gmail.com>',
        to: `${userEmail}`,
        subject: 'Confirmation mail from eRent',
        text: "Thank you! for posting product."
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.send("error")
          return
        } else {
          console.log('Email sent: ' + info.response);
          // res.send("success")
        }
      });
      res.json(result)
    }).catch(err => {
      console.log(err)
      res.send(err)
    })
  }
})
module.exports = router
