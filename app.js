const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// GET server time (ISO)
app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

// GET a random fun message
const MESSAGES = [
  'Hello from the server!',
  'Have a great day!',
  'Random number: ' + Math.floor(Math.random() * 1000),
  'Keep building great things!',
  'Express + JS = ❤️'
];
app.get('/api/random', (req, res) => {
  const idx = Math.floor(Math.random() * MESSAGES.length);
  res.json({ message: MESSAGES[idx] });
});

// POST echo endpoint - returns whatever JSON was sent
app.post('/api/echo', (req, res) => {
  res.json({ received: req.body });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
