'use strict';
const express = require('express');
// const {Router} = require('express');
const api = require('./api');

const routes = express();
//routes app.get app.all
routes.use('/api', api);

// express.static(__dirname + '/public');

module.exports = routes;
