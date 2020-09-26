// import dependancies
const express = require("express");
const router = express.Router();
const multer = require("multer");

// multer middleware -- (Subject to reloactaion)

// specifying path of video storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "media/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(/ /g, "_"));
  },
});

// handling constraints
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 200, // 200 MB
  },
});

// port which receives the video
router.post("/", upload.single("file"), (req, res, next) => {
  res.status(200).json({
    message: "Video upload successful",
  });
});

module.exports = router;
