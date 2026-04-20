const express = require("express");
const router = express.Router();

const loansController = require("../controllers/loans.controller");

// CREATE
router.post("/", loansController.createLoan);

// RETURN
router.put("/:id/return", loansController.returnLoan);

module.exports = router;