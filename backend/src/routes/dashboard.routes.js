const express = require("express");
const router = express.Router();

const { getSummary, getRecentActivity } = require("../services/dashboard.service");

router.get("/", async (req, res) => {
  try {
    const summary = await getSummary();
    res.json(summary);

  } catch (error) {
    console.error("Dashboard error:", error);

    res.status(500).json({
      success: false,
      error: "Dashboard error",
      detail: error.message
    });
  }
});

router.get("/activity", async (req, res) => {
  try {
    const activity = await getRecentActivity();
    res.json(activity);

  } catch (error) {
    console.error("Activity error:", error);

    res.status(500).json({
      success: false,
      error: "Activity error",
      detail: error.message
    });
  }
});

module.exports = router;