const fs = require("fs");
const express = require("express");

const videoRouter = express.Router();

videoRouter.get("/video", (req, res) => {
  res.sendFile("media/uploads/sample.mp4", { root: "../T037_Masterbridge/" });
});

module.exports = videoRouter;
