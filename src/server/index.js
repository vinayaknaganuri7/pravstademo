const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from React app
app.use(express.static(path.join(__dirname, '../client/build')));

// API routes can go here
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

// All other routes return React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
