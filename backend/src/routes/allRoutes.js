const express = require('express');
const { addUser } = require('../controllers/usuario/add');
const { authUser } = require('../controllers/usuario/auth');
const route = express.Router();

route.post('/addUser', addUser)
route.post('/authUser', authUser)

module.exports = route;