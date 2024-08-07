// filename: app.js 
const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use(express.urlencoded({ extended: true }));

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
    console.log('usernames will be logged here - wip')
});

// Route to display the HTML form
app.get('/new', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Username Form</title>
      </head>
      <body>
        <h1>Enter Username</h1>
        <form action="/submit" method="POST">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

// Route to handle form submission
app.post('/submit', (req, res) => {
  console.log(`Username submitted:`, req.body.username);
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, './ressources/404.html'));
});