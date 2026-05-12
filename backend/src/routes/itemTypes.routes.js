import express from "express";
import itemTypesController from "../controllers/itemTypes.controller.js";

const router = express.Router();

router.get("/", itemTypesController.getAll);
router.get("/available", itemTypesController.getAvailable);
router.post("/", itemTypesController.create);
router.put("/:id", itemTypesController.update);
router.delete("/:id", itemTypesController.remove);

export default router;