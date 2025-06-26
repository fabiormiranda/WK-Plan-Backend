// middleware/errorHandler.js

// Middleware para rotas não encontradas
const notFound = (req, res, next) => {
  res.status(404).json({ errorMessage: "This route does not exist" });
};

// Middleware de tratamento de erros
const errorHandler = (err, req, res, next) => {
  console.error("ERROR", req.method, req.path, err);

  if (!res.headersSent) {
    res.status(err.statusCode || 500).json({
      errorMessage: err.message || "Internal server error. Check the server console",
    });
  }
};

module.exports = { notFound, errorHandler };
