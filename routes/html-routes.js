const path = require("path");
const router = require("express").Router()
const fs = require("fs");

//module.exports = function (app) {
router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
//};
module.exports = router;