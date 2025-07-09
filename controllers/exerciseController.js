const Exercise = require("../models/Exercise");

// GET all exercises
exports.getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET exercise by id
exports.getExerciseById = async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    res.json(exercise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE new exercise
exports.createExercise = async (req, res) => {
  try {
    const { name, category, guide, mediaUrl } = req.body;
    const newExercise = new Exercise({
      name,
      category,
      guide,
      mediaUrl,
    });
    await newExercise.save();
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE exercise
exports.updateExercise = async (req, res) => {
  try {
    const updatedExercise = await Exercise.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedExercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    res.json(updatedExercise);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE exercise
exports.deleteExercise = async (req, res) => {
  try {
    const deletedExercise = await Exercise.findByIdAndDelete(req.params.id);
    if (!deletedExercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    res.json({ message: "Exercise deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
