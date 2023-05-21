const jwt = require('jsonwebtoken');

// middleware-ul JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extragerea token-ului din header

  if (!token) {
    return res.sendStatus(401); // Răspunde cu status "Unauthorized" dacă nu există token
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.sendStatus(403); // Răspunde cu status "Forbidden" dacă tokenul este invalid
    }

    // Compararea ID-ului de utilizator din cerere cu ID-ul de utilizator din token
    if (req.user && req.user.id !== decoded.id) {
      return res.sendStatus(403); // Răspunde cu status "Forbidden" dacă ID-urile nu se potrivesc
    }

    next(); // Dacă totul este în regulă, trecem la următorul middleware sau rută
  });
}
