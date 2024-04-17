const express = require('express');
const routes = require('./routes/index');

const app = express();

// Load routes from routes/index.js
app.use('/', routes);

// Set port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
