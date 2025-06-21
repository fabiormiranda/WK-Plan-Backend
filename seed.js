// seed.js
require('dotenv').config();
const mongoose = require('mongoose');

const User = require('./models/User')
const Exercise = require('./models/Exercise')
const WorkoutPlan = require('./models/WorkoutPlan')

const MONGO_URI = process.env.MONGO_URL;

async function seed() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected for seeding.');

    // Limpar coleções
    await User.deleteMany({});
    await Exercise.deleteMany({});
    await WorkoutPlan.deleteMany({});
    console.log('Collections cleared.');

    // Criar Users
    const users = await User.insertMany([
      { name: 'Ana Silva', email: 'ana@example.com', password: '123456' },
      { name: 'João Pereira', email: 'joao@example.com', password: 'abcdef' },
    ]);
    console.log('Users inserted.');

    // Criar Exercises
    const exercises = await Exercise.insertMany([
      { name: 'Push-up', category: 'Strength', description: 'Push-ups exercise' },
      { name: 'Squat', category: 'Strength', description: 'Squats exercise' },
      { name: 'Jumping Jacks', category: 'Cardio', description: 'Jumping Jacks exercise' },
    ]);
    console.log('Exercises inserted.');

    // Criar WorkoutPlans (assumindo que referenciam users e exercises)
    const plans = await WorkoutPlan.insertMany([
      {
        title: 'Plano para Ana',
         difficulty: 'easy',
        user: users[0]._id,
        exercises: [exercises[0]._id, exercises[2]._id],
        durationWeeks: 4,
      },
      {
        title: 'Plano para João',
        difficulty: 'medium',
        user: users[1]._id,
        exercises: [exercises[1]._id],
        durationWeeks: 6,
      },
    ]);
    console.log('Workout plans inserted.');

    await mongoose.disconnect();
    console.log('MongoDB disconnected after seeding.');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

seed();
