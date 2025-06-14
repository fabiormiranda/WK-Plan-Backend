require("dotenv").config();
require("./db");  // liga ao MongoDB

const express = require("express");
const app = express();

require("./config")(app);  // configura middlewares

// Rotas (exemplo)
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Outras rotas...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
