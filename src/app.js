// app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users'); // Import the user routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Use the user routes
app.use(userRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});