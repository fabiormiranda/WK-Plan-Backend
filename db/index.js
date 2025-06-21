// db/index.js
const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/wk-plan";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to MongoDB!`);
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", error);
  });
