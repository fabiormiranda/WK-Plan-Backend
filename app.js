require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

// Configura middlewares (logger, cors, json, etc.)
require("./config")(app);

// Importa rotas
const authRoutes = require("./routes/authRoutes");
const workoutPlanRoutes = require("./routes/workoutPlanRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

// Usa rotas
app.use("/api/auth", authRoutes);
app.use("/api/workout-plans", workoutPlanRoutes);
app.use("/api/exercises", exerciseRoutes);
app.use("/api", uploadRoutes);

// Middleware para rotas não encontradas (404) — deve vir depois das rotas
const { notFound, errorHandler } = require("./middleware/errorHandler");
app.use(notFound);

// Middleware global de tratamento de erros (depois do 404)
app.use(errorHandler);

// Start do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
