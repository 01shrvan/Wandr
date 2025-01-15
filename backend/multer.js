const multer = require("multer");
const path = require("path");

//storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "uploads");
    cb(null, uploadPath); //destination folder for storing files
  },
  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + path.extname(file.originalname) //unique file name
    );
  },
});

//file filter to accept only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Please upload only images."), false);
  }
};

//initialize multer
const upload = multer({ storage, fileFilter });

module.exports = upload;
