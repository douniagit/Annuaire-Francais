'use strict';

const express = require('express');
const api = require('./api');


const routes=new express();
//routes app.get app.all 
routes.use('/', api);

routes.use(express.static(__dirname +'../public'));

module.exports=routes;

