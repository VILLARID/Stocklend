import express from "express";
import {
    getLoans,
    getLoanById,
    getLoansStats,
    createLoan
} from "../controllers/loans.controller.js";

const router = express.Router();

router.get("/", getLoans);
router.get("/stats", getLoansStats);
router.get("/:id", getLoanById);
router.post("/", createLoan);

export default router;