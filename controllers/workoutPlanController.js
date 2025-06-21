const Plan = require("../models/WorkoutPlan");

// GET all plans
exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find().populate("exercises");
    res.json(plans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET plan by id
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

// CREATE new plan
exports.createPlan = async (req, res) => {
  try {
    const { title, description, difficulty, exercises } = req.body;

    const newPlan = new Plan({
      title,
      description,
      difficulty,
      exercises,
      user: req.user.userId, // Usa o userId do token
    });

    await newPlan.save();
    res.status(201).json(newPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE plan
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

// DELETE plan
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
