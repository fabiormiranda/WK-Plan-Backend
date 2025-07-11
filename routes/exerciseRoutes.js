const express = require("express");
const router = express.Router();

const exerciseController = require("../controllers/exerciseController");
const isAuthenticated = require("../middleware/auth");

// Route to GET all exercises (public)
router.get("/", exerciseController.getAllExercises);

// Route to GET a specific exercise by ID (public)
router.get("/:id", exerciseController.getExerciseById);

// Route to POST (create) a new exercise (protected)
router.post("/", isAuthenticated, exerciseController.createExercise);

// Route to PUT (update) an existing exercise by ID (protected)
router.put("/:id", isAuthenticated, exerciseController.updateExercise);

// Route to DELETE an exercise by ID (protected)
router.delete("/:id", isAuthenticated, exerciseController.deleteExercise);

module.exports = router;
