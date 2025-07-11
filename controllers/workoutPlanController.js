const Plan = require("../models/WorkoutPlan");

/**
 * Get all workout plans for the logged-in user.
 * Protected endpoint.
 */
exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find({ user: req.user.userId }).populate("exercises");
    res.json(plans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get a single workout plan by ID.
 * Protected endpoint.
 */
exports.getPlanById = async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id).populate("exercises");

    if (!plan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.json(plan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Create a new workout plan for the logged-in user.
 * Protected endpoint.
 */
exports.createPlan = async (req, res) => {
  try {
    const { title, description, difficulty, exercises, dates } = req.body;

    const newPlan = new Plan({
      title,
      description,
      difficulty,
      exercises,
      dates,
      user: req.user.userId, // Take userId from the JWT token
    });

    await newPlan.save();
    res.status(201).json(newPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Update an existing workout plan by ID.
 * Protected endpoint.
 */
exports.updatePlan = async (req, res) => {
  try {
    const updatedPlan = await Plan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedPlan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.json(updatedPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Delete a workout plan by ID.
 * Protected endpoint.
 */
exports.deletePlan = async (req, res) => {
  try {
    const deletedPlan = await Plan.findByIdAndDelete(req.params.id);

    if (!deletedPlan) {
      return res.status(404).json({ message: "Plan not found" });
    }

    res.json({ message: "Plan deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
