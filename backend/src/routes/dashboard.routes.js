const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.get("/", async (req, res) => {
  try {
    const totalItemsResult = await pool.query(`
      SELECT COALESCE(SUM(available_quantity), 0) AS total
      FROM item_types
    `);

    const availableItemsResult = await pool.query(`
      SELECT COALESCE(SUM(available_quantity), 0) AS total
      FROM item_types
    `);

    const borrowedItemsResult = await pool.query(`
      SELECT COALESCE(SUM(quantity), 0) AS total
      FROM loans
    `);

    const activeLoansResult = await pool.query(`
      SELECT COUNT(*) AS total
      FROM loans
    `);

    res.json({
      total_items: Number(totalItemsResult[0].total),
      available_items: Number(availableItemsResult[0].total),
      borrowed_items: Number(borrowedItemsResult[0].total),
      active_loans: Number(activeLoansResult[0].total),
    });

  } catch (error) {
    console.error("Dashboard error:", error);

    res.status(500).json({
      success: false,
      error: "Dashboard error",
      detail: error.message
    });
  }
});

module.exports = router;