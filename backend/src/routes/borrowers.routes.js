const express = require("express");
const router = express.Router();

const borrowersController = require("../controllers/borrowers.controller");

// GET
router.get("/", borrowersController.getAllBorrowers);

// POST
router.post("/", borrowersController.createBorrower);

module.exports = router;