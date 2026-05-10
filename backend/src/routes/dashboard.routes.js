import { Router } from "express";
import { getDashboardStats, getRecentActivity } from "../controllers/dashboard.controller.js";

const router = Router();

router.get("/", getDashboardStats);
router.get("/activity", getRecentActivity);

export default router;