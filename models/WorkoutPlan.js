const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const planSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
  exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }],
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = model('Plan', planSchema);
