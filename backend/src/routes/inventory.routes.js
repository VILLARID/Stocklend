import { Router } from "express";
import {
    getAllItems,
    createItem,
    updateItem,
    deleteItem
} from "../controllers/inventory.controller.js";

const router = Router();

router.get("/", getAllItems);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;