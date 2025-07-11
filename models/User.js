const mongoose = require('mongoose');
const { Schema, model } = mongoose;

/**
 * User Schema
 * Defines the structure of a user document in MongoDB.
 */
const userSchema = new Schema(
  {
    // User's name (required)
    name: { type: String, required: true },

    // User's email (required, unique)
    email: { type: String, required: true, unique: true },

    // Hashed password (required)
    password: { type: String, required: true },

    // User role for permissions ('user' by default, can also be 'admin')
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Export the User model for use in authentication, controllers, and routes
module.exports = model('User', userSchema);
