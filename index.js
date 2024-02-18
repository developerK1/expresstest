// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define a route handler for a custom endpoint
app.get('/about', (req, res) => {
  res.send('About Us Page');
});

// Start the server listening on port 3000
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
