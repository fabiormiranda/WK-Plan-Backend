const mongoose = require('mongoose');
const { Schema, model } = mongoose;

/**
 * Workout Plan Schema
 * Defines the structure for a workout plan document in MongoDB.
 */
const planSchema = new Schema(
  {
    // Plan title (required)
    title: { type: String, required: true },

    // Optional description of the plan
    description: { type: String },

    // Optional guide for the plan
    guide: String,

    // Difficulty level (required, can be 'easy', 'medium', or 'hard')
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      required: true,
    },

    // References to Exercise documents (many-to-many relationship)
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],

    // Reference to the User who owns this plan (required)
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },

    // Array of dates (in YYYY-MM-DD string format) when the workout is planned
    dates: [String],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the Plan model for use in routes and controllers
module.exports = model('Plan', planSchema);
