require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

// Configura middlewares (logger, cors, json, etc.)
require("./config")(app);

// server health check
app.get("/", (req, res) => {
  res.status(200).json({ status: "Healthy" });
});

// Importa rotas
const authRoutes = require("./routes/authRoutes");
const workoutPlanRoutes = require("./routes/workoutPlanRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");

// Usa rotas
app.use("/api/auth", authRoutes);
app.use("/api/workout-plans", workoutPlanRoutes);
app.use("/api/exercises", exerciseRoutes);

// Rota de teste
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

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
