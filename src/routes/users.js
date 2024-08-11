// routes/users.js
const express = require('express');
const router = express.Router();
const { getUsernames, createUsernameGet, createUsernamePost } = require('../db/queries');

// Define the routes
router.get('/usernames', getUsernames);
router.get('/create-username', createUsernameGet);
router.post('/create-username', createUsernamePost);

module.exports = router;