const multer = require('multer')
const path = require('path')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp');
  },
  filename: function (req, file, cb) {
    //current date while uploading
    var timeStamp = Date.now();

    //file.fieldname->name mentioned in form and .originalname is filename in users computer
    cb(null, file.fieldname + '-' + timeStamp + '.' + path.extname(file.originalname));
  }
});

//Upload
var upload = multer({
  storage: storage,
  //maximum size of image is 2mb
  limits: {
    fileSize: 1024 * 2
  },
  fileFilter: function (req, file, cb) {
    var extension = path.extname(file.originalname);
    if (extension !== '.gif' && extension !== '.jpeg' && extension !== '.png' && extension !== '.bmp' && extension != '.jpg' && extension !== '.TIFF ') {
      return cb(new Error('Only images are allowed'))
    }
    cb(null, true)

  },
})
