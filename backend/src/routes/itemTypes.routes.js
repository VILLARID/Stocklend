const express = require("express");
const router = express.Router();

const itemTypesController = require("../controllers/itemTypes.controller");

// GET
router.get("/", itemTypesController.getAllItemTypes);

// POST
router.post("/", itemTypesController.createItemType);

module.exports = router;