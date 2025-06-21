const jwt = require("jsonwebtoken");

function isAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Espera-se o token no formato "Bearer <token>"
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Guarda os dados do utilizador decodificados na request para usar nas rotas protegidas
    req.user = decoded;
    next();
  });
}

module.exports = isAuthenticated;
