// config/index.js
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

module.exports = (app) => {
  app.set("trust proxy", 1);

  app.use(
    cors({
      origin: ["http://localhost:5173"], // muda para o frontend que usares
    })
  );

  app.use(logger("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
