const express = require("express");
const router = express.Router();
const workoutPlanController = require("../controllers/workoutPlanController");
const isAuthenticated = require("../middleware/auth");

router.post("/", isAuthenticated, workoutPlanController.createPlan);
router.put("/:id", isAuthenticated, workoutPlanController.updatePlan);
router.delete("/:id", isAuthenticated, workoutPlanController.deletePlan);
router.get("/", isAuthenticated, workoutPlanController.getAllPlans);
router.get("/:id", isAuthenticated, workoutPlanController.getPlanById);

module.exports = router;
