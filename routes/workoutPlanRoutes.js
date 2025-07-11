const express = require("express");
const router = express.Router();
const workoutPlanController = require("../controllers/workoutPlanController");
const isAuthenticated = require("../middleware/auth");

/**
 * POST /api/workout-plans
 * Create a new workout plan (protected)
 */
router.post("/", isAuthenticated, workoutPlanController.createPlan);

/**
 * PUT /api/workout-plans/:id
 * Update an existing workout plan by ID (protected)
 */
router.put("/:id", isAuthenticated, workoutPlanController.updatePlan);

/**
 * DELETE /api/workout-plans/:id
 * Delete a workout plan by ID (protected)
 */
router.delete("/:id", isAuthenticated, workoutPlanController.deletePlan);

/**
 * GET /api/workout-plans
 * Retrieve all workout plans for the authenticated user (protected)
 */
router.get("/", isAuthenticated, workoutPlanController.getAllPlans);

/**
 * GET /api/workout-plans/:id
 * Retrieve a single workout plan by ID (protected)
 */
router.get("/:id", isAuthenticated, workoutPlanController.getPlanById);

module.exports = router;
