'use strict';


const express = require('express');
const api = require('./api');


const routes=express();
//routes app.get app.all 
routes.use('/', api);

routes.use(express.static('../../public'));

module.exports = routes;
