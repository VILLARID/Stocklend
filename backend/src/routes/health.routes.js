const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "IMS Backend",
    time: new Date(),
  });
});

module.exports = router;