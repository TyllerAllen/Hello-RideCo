import { Router } from "express";
import listRoutes from "./list.routes";

/**
 * Main API Router
 * All routes defined here are prefixed with /api
 */
const router: Router = Router();

/**
 * List Routes
 * Mounted at: /api/list
 * Handles all list-related endpoints
 */
router.use("/list", listRoutes);

export default router;
