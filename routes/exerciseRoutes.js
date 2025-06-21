const express = require("express");
const router = express.Router();
const exerciseController = require("../controllers/exerciseController");
const isAuthenticated = require("../middleware/auth");

// GET all exercises
router.get("/", exerciseController.getAllExercises);

// GET one exercise by id
router.get("/:id", exerciseController.getExerciseById);

// POST create new exercise (protected)
router.post("/", isAuthenticated, exerciseController.createExercise);

// PUT update exercise (protected)
router.put("/:id", isAuthenticated, exerciseController.updateExercise);

// DELETE delete exercise (protected)
router.delete("/:id", isAuthenticated, exerciseController.deleteExercise);

module.exports = router;
