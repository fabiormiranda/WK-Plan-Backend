// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Exercise = require('./models/Exercise');

// Importa os exercícios reais do teu JSON
const exercisesData = require('./data/exercises.json');

const MONGO_URI = process.env.MONGO_URL;

async function seed() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ MongoDB connected for seeding.');

    // Limpa apenas os exercícios
    await Exercise.deleteMany({});
    console.log('✅ Exercises collection cleared.');

    // Insere os exercícios reais do JSON
    const exercises = await Exercise.insertMany(exercisesData);
    console.log(`✅ Inserted ${exercises.length} exercises successfully.`);

    await mongoose.disconnect();
    console.log('✅ MongoDB disconnected after seeding.');
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
}

seed();
