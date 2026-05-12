import express from "express";
import { getLoansCards } from "../controllers/loansDashboard.controller.js";

const router = express.Router();

router.get("/cards", getLoansCards);

export default router;