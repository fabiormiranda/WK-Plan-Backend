const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

module.exports = (app) => {
  app.set("trust proxy", 1);

  app.use(
    cors({
      origin: ["http://localhost:5173", "https://wk-plan.netlify.app", "https://wkplan-frontend.onrender.com"],
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

  app.use(logger("dev"));

  
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  app.use(cookieParser());
};
