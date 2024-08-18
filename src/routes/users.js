var express = require('express');
const usersRouter = express.Router();

const usersController = require('../controllers/usersController');

usersRouter.get('/', usersController.usersGet);

usersRouter.get('/new', usersController.newUserGet);
usersRouter.post('/new', usersController.newUserPost);

usersRouter.get('/delete', usersController.deleteAllGet);

module.exports = usersRouter;