module.exports = (app) => {
  // Middleware para rotas não encontradas (404)
  app.use((req, res, next) => {
    res.status(404).json({ errorMessage: "This route does not exist" });
  });

  // Middleware de tratamento de erros
  app.use((err, req, res, next) => {
    console.error("ERROR", req.method, req.path, err);

    if (!res.headersSent) {
      res.status(err.statusCode || 500).json({
        errorMessage: err.message || "Internal server error. Check the server console",
      });
    }
  });
};
