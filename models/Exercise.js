const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: String,
  duration: Number,
  mediaUrl: String
}, { timestamps: true });

module.exports = model('Exercise', exerciseSchema);
