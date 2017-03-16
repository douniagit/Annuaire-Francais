'use strict';

const {Router} = require('express');
const api = require('./api');


const routes=new Router();
//routes app.get app.all 
routes.use('/api', api)

routes.use(express.static(__dirname +'../public'));
routes.use(express.static(__dirname+'../public/admin'))

module.exports=routes;

