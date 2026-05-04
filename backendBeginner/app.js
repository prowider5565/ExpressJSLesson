const express = require('express');

const app = express();
// Port
const PORT = 3000;

// Middleware, frontenddan kelgan so'rov malumotini json kurinishiga keltiradi
app.use(express.json());

// Router - e.g: /users, /register, /settings
app.get('/', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Salom Node.js Olami!' });
});
// , state: "Ok", "kopaytirish": 5 * 8


// Serverni ishga tushirish
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});