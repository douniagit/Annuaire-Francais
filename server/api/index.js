'use strict';


const users = require('./controllers/users');
const ressources= require('./controllers/ressources');
const suggestions= require('./controllers/suggestions');
const bodyParser=require('body-parser');
const {Router} =require('express');
const db=require('../database');

const apiRoutes=new Router();
// pour définir les routes

apiRoutes.use(bodyParser.urlencoded({extended:false}));
apiRoutes.use(bodyParser.json());


//------------------users--------------------

apiRoutes.post('/users', function (req,res){ //ou .get?
	//methode de controller
	db.users.create(req,res);
});

apiRoutes.get('/users', function (req,res){
	//methode de controller
	db.users.find(req,res);
});

apiRoutes.put('/users', function (req,res){
	
	db.users.update(req,res);
});

apiRoutes.delete('/users', function (req,res){
	
	db.users.delete(req,res);
});


//------------------Ressources--------------------

apiRoutes.post('/ressources', function (req,res){ //ou .get?
	//methode de controller
	db.ressources.create(req,res);
});

apiRoutes.get('/ressources', function (req,res){
	//methode de controller
	db.ressources.find(req,res);
});

apiRoutes.put('/ressources', function (req,res){
	//methode de controller
	db.ressources.update(req,res);
});

apiRoutes.post('/ressources', function (req,res){
	//methode de controller
	db.ressources.add(req,res);
});

apiRoutes.delete('/ressources', function (req,res){
	//methode de controller
	db.ressources.delete(req,res);
});
//----------------Suggestions--------------

apiRoutes.post('/suggestions', function (req,res){ //ou .get?
	//methode de controller
	db.suggestions.create(req,res);
});

apiRoutes.delete('/suggestions', function (req,res){
	//methode de controller
	db.suggestions.delete(req,res);
});



// module.exports={
// 	users:users,
// 	ressources:ressources,
// 	suggestions:suggestions
// };

module.exports=apiRoutes;
