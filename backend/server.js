// server.js
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Server running at http://localhost:3000');
});

// Example API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Here is your data.' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
