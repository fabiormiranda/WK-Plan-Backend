// seed.js
require('dotenv').config();
const mongoose = require('mongoose');

const User = require('./models/User');
const Exercise = require('./models/Exercise');
const WorkoutPlan = require('./models/WorkoutPlan');

const MONGO_URI = process.env.MONGO_URL;

async function seed() {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected for seeding.');

    // Clear collections
    await User.deleteMany({});
    await Exercise.deleteMany({});
    await WorkoutPlan.deleteMany({});
    console.log('Collections cleared.');

    // Create Users
    const users = await User.insertMany([
      { name: 'Ana Silva', email: 'ana@example.com', password: '123456' },
      { name: 'João Pereira', email: 'joao@example.com', password: 'abcdef' },
    ]);
    console.log('Users inserted.');

    // Create Exercises (realistic bodybuilding data)
    const exercises = await Exercise.insertMany([
      // Chest
      {
        name: "Barbell Bench Press",
        category: "Chest",
        description: "Lie on a flat bench and press the barbell from chest upwards.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Bench+Press"
      },
      {
        name: "Incline Dumbbell Press",
        category: "Chest",
        description: "Press dumbbells upwards on an incline bench to target upper chest.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Incline+Press"
      },
      {
        name: "Cable Fly",
        category: "Chest",
        description: "Use the cable machine to perform chest flyes for pectoral isolation.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Cable+Fly"
      },
      // Back
      {
        name: "Lat Pulldown",
        category: "Back",
        description: "Pull the bar down towards your chest to work the lats.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Lat+Pulldown"
      },
      {
        name: "Barbell Bent-Over Row",
        category: "Back",
        description: "Bend over and row the barbell towards your waist.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Bent+Over+Row"
      },
      {
        name: "Single-Arm Dumbbell Row",
        category: "Back",
        description: "Pull the dumbbell upwards while supporting your body on a bench.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Dumbbell+Row"
      },
      // Shoulders
      {
        name: "Dumbbell Lateral Raise",
        category: "Shoulders",
        description: "Lift dumbbells to your sides to target the deltoids.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Lateral+Raise"
      },
      {
        name: "Barbell Overhead Press",
        category: "Shoulders",
        description: "Press the barbell overhead to strengthen shoulders.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Overhead+Press"
      },
      {
        name: "Dumbbell Arnold Press",
        category: "Shoulders",
        description: "Press dumbbells overhead with a rotation for full shoulder activation.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Arnold+Press"
      },
      // Biceps
      {
        name: "Barbell Curl",
        category: "Biceps",
        description: "Curl the barbell upwards to work the biceps.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Barbell+Curl"
      },
      {
        name: "Dumbbell Hammer Curl",
        category: "Biceps",
        description: "Curl dumbbells with palms facing each other.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Hammer+Curl"
      },
      {
        name: "Preacher Curl",
        category: "Biceps",
        description: "Curl the barbell on a preacher bench for strict biceps isolation.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Preacher+Curl"
      },
      // Triceps
      {
        name: "Triceps Pushdown",
        category: "Triceps",
        description: "Push the cable bar down to target the triceps.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Pushdown"
      },
      {
        name: "Overhead Dumbbell Extension",
        category: "Triceps",
        description: "Extend the dumbbell overhead to work the triceps.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Overhead+Extension"
      },
      {
        name: "Bench Dips",
        category: "Triceps",
        description: "Lower and lift your body using a bench to target triceps.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Bench+Dips"
      },
      // Legs
      {
        name: "Barbell Squat",
        category: "Legs",
        description: "Squat with a barbell to work quadriceps and glutes.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Squat"
      },
      {
        name: "Leg Press",
        category: "Legs",
        description: "Push the weighted platform with your feet on the leg press machine.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Leg+Press"
      },
      {
        name: "Leg Extension",
        category: "Legs",
        description: "Extend your legs against resistance on the leg extension machine.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Leg+Extension"
      },
      {
        name: "Lying Leg Curl",
        category: "Legs",
        description: "Curl your legs on the lying leg curl machine to target hamstrings.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Leg+Curl"
      },
      // Glutes
      {
        name: "Hip Thrust",
        category: "Glutes",
        description: "Elevate your hips with weight on your lap to activate glutes.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Hip+Thrust"
      },
      {
        name: "Glute Bridge",
        category: "Glutes",
        description: "Lift hips off the ground while lying on your back.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Glute+Bridge"
      },
      // Calves
      {
        name: "Standing Calf Raise",
        category: "Calves",
        description: "Raise your heels while standing to work the calves.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Calf+Raise"
      },
      {
        name: "Seated Calf Raise",
        category: "Calves",
        description: "Raise your heels while seated to target the soleus.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Seated+Calf+Raise"
      },
      // Traps
      {
        name: "Barbell Shrugs",
        category: "Traps",
        description: "Lift shoulders towards ears while holding a barbell.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Shrugs"
      },
      {
        name: "Upright Row",
        category: "Traps",
        description: "Row the barbell upwards to your chin.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Upright+Row"
      },
      // Abs
      {
        name: "Crunches",
        category: "Abs",
        description: "Lie on your back and lift shoulders towards your knees.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Crunches"
      },
      {
        name: "Hanging Leg Raise",
        category: "Abs",
        description: "Hang from a bar and lift your legs up to your chest.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Leg+Raise"
      },
      {
        name: "Plank",
        category: "Abs",
        description: "Hold a plank position for time to strengthen your core.",
        duration: 60,
        mediaUrl: "https://via.placeholder.com/150?text=Plank"
      },
      // Forearms
      {
        name: "Wrist Curl",
        category: "Forearms",
        description: "Curl your wrists upwards while holding a barbell.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Wrist+Curl"
      },
      {
        name: "Reverse Curl",
        category: "Forearms",
        description: "Curl the barbell with overhand grip.",
        duration: null,
        mediaUrl: "https://via.placeholder.com/150?text=Reverse+Curl"
      },
      // Cardio
      {
        name: "Treadmill Run",
        category: "Cardio",
        description: "Run on a treadmill at moderate to high intensity.",
        duration: 15,
        mediaUrl: "https://via.placeholder.com/150?text=Treadmill"
      },
      {
        name: "Stationary Bike",
        category: "Cardio",
        description: "Pedal on a stationary bike for cardio training.",
        duration: 15,
        mediaUrl: "https://via.placeholder.com/150?text=Bike"
      }
    ]);
    console.log('Exercises inserted.');

    // Create WorkoutPlans (assumes plans reference users and exercises)
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
