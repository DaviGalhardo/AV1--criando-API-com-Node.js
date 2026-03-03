const express = require('express');
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Import routes
const routes = require('./routes/index');

// Use routes
app.use('/api', routes);

module.exports = app;