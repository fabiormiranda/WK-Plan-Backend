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
    mediaUrl: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Incline Dumbbell Press",
    category: "Chest",
    description: "Press dumbbells upwards on an incline bench to target upper chest.",
    duration: null,
    mediaUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Cable Fly",
    category: "Chest",
    description: "Use the cable machine to perform chest flyes for pectoral isolation.",
    duration: null,
    mediaUrl: "https://cdn.pixabay.com/photo/2016/11/19/16/39/gym-1835901_150.jpg"
  },
  // Back
  {
    name: "Lat Pulldown",
    category: "Back",
    description: "Pull the bar down towards your chest to work the lats.",
    duration: null,
    mediaUrl: "https://cdn.pixabay.com/photo/2017/08/07/10/26/gym-2604147_150.jpg"
  },
  {
    name: "Barbell Bent-Over Row",
    category: "Back",
    description: "Bend over and row the barbell towards your waist.",
    duration: null,
    mediaUrl: "https://images.unsplash.com/photo-1594737625785-c5ef8b40a691?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Single-Arm Dumbbell Row",
    category: "Back",
    description: "Pull the dumbbell upwards while supporting your body on a bench.",
    duration: null,
    mediaUrl: "https://cdn.pixabay.com/photo/2016/11/19/14/00/gym-1836598_150.jpg"
  },
  // Shoulders
  {
    name: "Dumbbell Lateral Raise",
    category: "Shoulders",
    description: "Lift dumbbells to your sides to target the deltoids.",
    duration: null,
    mediaUrl: "https://images.unsplash.com/photo-1594737625900-f2e1c1e6e8d9?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Barbell Overhead Press",
    category: "Shoulders",
    description: "Press the barbell overhead to strengthen shoulders.",
    duration: null,
    mediaUrl: "https://cdn.pixabay.com/photo/2017/08/10/07/25/weightlifting-2615917_150.jpg"
  },
  {
    name: "Dumbbell Arnold Press",
    category: "Shoulders",
    description: "Press dumbbells overhead with a rotation for full shoulder activation.",
    duration: null,
    mediaUrl: "https://images.unsplash.com/photo-1594737625787-c1d6f24a2d17?auto=format&fit=crop&w=150&q=80"
  },
  // Biceps
  {
    name: "Barbell Curl",
    category: "Biceps",
    description: "Curl the barbell upwards to work the biceps.",
    duration: null,
    mediaUrl: "https://cdn.pixabay.com/photo/2016/11/19/14/02/gym-1836607_150.jpg"
  },
  {
    name: "Dumbbell Hammer Curl",
    category: "Biceps",
    description: "Curl dumbbells with palms facing each other.",
    duration: null,
    mediaUrl: "https://images.unsplash.com/photo-1605296867354-9a97fcf45e37?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Preacher Curl",
    category: "Biceps",
    description: "Curl the barbell on a preacher bench for strict biceps isolation.",
    duration: null,
    mediaUrl: "https://cdn.pixabay.com/photo/2017/08/07/14/19/gym-2604463_150.jpg"
  },
  // Triceps
  {
    name: "Triceps Pushdown",
    category: "Triceps",
    description: "Push the cable bar down to target the triceps.",
    duration: null,
    mediaUrl: "https://images.unsplash.com/photo-1594737625943-c98b0a11a9e5?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Overhead Dumbbell Extension",
    category: "Triceps",
    description: "Extend the dumbbell overhead to work the triceps.",
    duration: null,
    mediaUrl: "https://cdn.pixabay.com/photo/2017/08/07/11/24/gym-2604183_150.jpg"
  },
  {
    name: "Bench Dips",
    category: "Triceps",
    description: "Lower and lift your body using a bench to target triceps.",
    duration: null,
    mediaUrl: "https://images.unsplash.com/photo-1594737625831-c0bf5b4b0f5e?auto=format&fit=crop&w=150&q=80"
  },
  // Legs
  {
    name: "Barbell Squat",
    category: "Legs",
    description: "Squat with a barbell to work quadriceps and glutes.",
    duration: null,
    mediaUrl: "https://cdn.pixabay.com/photo/2017/08/07/12/06/gym-2604215_150.jpg"
  },
  {
    name: "Leg Press",
    category: "Legs",
    description: "Push the weighted platform with your feet on the leg press machine.",
    duration: null,
    mediaUrl: "https://images.unsplash.com/photo-1594737625898-c6db270aad87?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Leg Extension",
    category: "Legs",
    description: "Extend your legs against resistance on the leg extension machine.",
    duration: null,
    mediaUrl: "https://cdn.pixabay.com/photo/2017/08/07/12/22/gym-2604237_150.jpg"
  },
  {
    name: "Lying Leg Curl",
    category: "Legs",
    description: "Curl your legs on the lying leg curl machine to target hamstrings.",
    duration: null,
    mediaUrl: "https://images.unsplash.com/photo-1594737625942-cd5e16c86a4a?auto=format&fit=crop&w=150&q=80"
  },
  // Glutes
  {
    name: "Hip Thrust",
    category: "Glutes",
    description: "Elevate your hips with weight on your lap to activate glutes.",
    duration: null,
    mediaUrl: "https://cdn.pixabay.com/photo/2017/08/07/14/05/gym-2604397_150.jpg"
  },
  {
    name: "Glute Bridge",
    category: "Glutes",
    description: "Lift hips off the ground while lying on your back.",
    duration: null,
    mediaUrl: "https://images.unsplash.com/photo-1594737625863-22219f445370?auto=format&fit=crop&w=150&q=80"
  },
  // Calves
  {
    name: "Standing Calf Raise",
    category: "Calves",
    description: "Raise your heels while standing to work the calves.",
    duration: null,
    mediaUrl: "https://cdn.pixabay.com/photo/2017/08/07/14/17/gym-2604413_150.jpg"
  },
  {
    name: "Seated Calf Raise",
    category: "Calves",
    description: "Raise your heels while seated to target the soleus.",
    duration: null,
    mediaUrl: "https://images.unsplash.com/photo-1594737625874-2e4c5e177f90?auto=format&fit=crop&w=150&q=80"
  },
  // Traps
  {
    name: "Barbell Shrugs",
    category: "Traps",
    description: "Lift shoulders towards ears while holding a barbell.",
    duration: null,
    mediaUrl: "https://cdn.pixabay.com/photo/2017/08/07/11/00/gym-2604121_150.jpg"
  },
  {
    name: "Upright Row",
    category: "Traps",
    description: "Row the barbell upwards to your chin.",
    duration: null,
    mediaUrl: "https://images.unsplash.com/photo-1594737625906-c1c6bc8f36f6?auto=format&fit=crop&w=150&q=80"
  },
  // Abs
  {
    name: "Crunches",
    category: "Abs",
    description: "Lie on your back and lift shoulders towards your knees.",
    duration: null,
    mediaUrl: "https://cdn.pixabay.com/photo/2016/11/19/16/39/gym-1835901_150.jpg"
  },
  {
    name: "Hanging Leg Raise",
    category: "Abs",
    description: "Hang from a bar and lift your legs up to your chest.",
    duration: null,
    mediaUrl: "https://images.unsplash.com/photo-1594737625917-c50ed9beaa91?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Plank",
    category: "Abs",
    description: "Hold a plank position for time to strengthen your core.",
    duration: 60,
    mediaUrl: "https://cdn.pixabay.com/photo/2017/08/07/10/44/gym-2604162_150.jpg"
  },
  // Forearms
  {
    name: "Wrist Curl",
    category: "Forearms",
    description: "Curl your wrists upwards while holding a barbell.",
    duration: null,
    mediaUrl: "https://images.unsplash.com/photo-1594737625947-f37bcd3b3500?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Reverse Curl",
    category: "Forearms",
    description: "Curl the barbell with overhand grip.",
    duration: null,
    mediaUrl: "https://cdn.pixabay.com/photo/2016/11/19/16/39/gym-1835901_150.jpg"
  },
  // Cardio
  {
    name: "Treadmill Run",
    category: "Cardio",
    description: "Run on a treadmill at moderate to high intensity.",
    duration: 15,
    mediaUrl: "https://images.unsplash.com/photo-1546484959-f1994e33ee7b?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Stationary Bike",
    category: "Cardio",
    description: "Pedal on a stationary bike for cardio training.",
    duration: 15,
    mediaUrl: "https://cdn.pixabay.com/photo/2016/11/29/07/14/bike-1869444_150.jpg"
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
