const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to MongoDB!`);
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
