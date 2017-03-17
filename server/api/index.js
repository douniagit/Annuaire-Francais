'use strict';

const users = require('./controllers/users');
const ressources= require('./controllers/ressources');
const suggestions= require('./controllers/suggestions');
const bodyParser=require('body-parser');
const { Router } = require('express');
const db = require('../database/index.js');

const apiRoutes = new Router();
// pour définir les routes

apiRoutes.use(bodyParser.urlencoded({extended:false}));
apiRoutes.use(bodyParser.json());

//------------------users--------------------

apiRoutes.post('/users', function (req,res) { //ou .get?
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
	console.log('Bonjour je suis la route get ressources');
	db.ressources.find(req,res);
	console.log('Je suis la méthode find.');
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
	api.suggestions.create(req,res);
});

apiRoutes.delete('/suggestions', function (req,res){
	//methode de controller
	api.suggestions.delete(req,res);
});



<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f011abe3ec712f42f62220f9bc8549776771dcc2
// module.exports={
// 	users:users,
// 	ressources:ressources,
//  suggestions:suggestions
// };

module.exports = apiRoutes;
<<<<<<< HEAD
=======
module.exports={
	users:users,
	ressources:ressources,
	suggestions:suggestions
};
>>>>>>> 9e5d06053a64227c2e65ff3c7baafc7aa21594bd
=======

>>>>>>> f011abe3ec712f42f62220f9bc8549776771dcc2
