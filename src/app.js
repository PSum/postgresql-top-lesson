require('dotenv').config();

var express = require('express');
var path = require('path');
var app = express();

const usersRouter = require('./routes/users.js')

console.log(`HOST: ${process.env.HOST}`);
console.log(`USER: ${process.env.USER}`);
console.log(`DATABASE: ${process.env.DATABASE}`);
console.log(`PASSWORD: ${process.env.PASSWORD}`);
console.log(`PORT: ${process.env.PORT}`);
console.log(`DBPORT: ${process.env.DBPORT}`);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);

// Global error handler
app.use((err, req, res, next) => {
    console.error('Global error handler:', err.stack);
    res.status(500).send('Something went wrong!');
});

const port = parseInt(process.env.PORT, 10) || 3000;
app.listen(port, () => console.log(`Express app listening on port ${port}!`));