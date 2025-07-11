const mongoose = require('mongoose');
const { Schema, model } = mongoose;

/**
 * Exercise Schema
 * Defines the structure of an exercise document in MongoDB.
 */
const exerciseSchema = new Schema(
  {
    // Exercise name (required)
    name: { type: String, required: true },

    // Exercise category (required)
    category: { type: String, required: true },

    // Optional guide or instructions for the exercise
    guide: String,

    // Optional media URL for a video or image of the exercise
    mediaUrl: String,
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the Exercise model for use in controllers and routes
module.exports = model('Exercise', exerciseSchema);
