'use strict';


const users = require('./controllers/users');
const ressources= require('./controllers/ressources');
const bodyParser=require('body-parser');


const apiRoutes=new Router();
// pour définir les routes

apiRoutes.use(bodyParser.urlencoded({extended:false}));
apiRoutes.use(bodyParser.json());


//------------------users--------------------

apiRoutes.post('/users', function (req,res){ //ou .get?
	//methode de controller
	api.users.create(req,res);
});

apiRoutes.get('/users', function (req,res){
	//methode de controller
	api.users.find(req,res);
});

apiRoutes.put('/users', function (req,res){
	
	api.users.update(req,res);
});

apiRoutes.delete('/users', function (req,res){
	
	api.users.delete(req,res);
});


//------------------Ressources--------------------

apiRoutes.post('/ressources', function (req,res){ //ou .get?
	//methode de controller
	api.ressources.create(req,res);
});

apiRoutes.get('/ressources', function (req,res){
	//methode de controller
	api.ressources.find(req,res);
});

apiRoutes.put('/ressources', function (req,res){
	//methode de controller
	api.ressources.update(req,res);
});

apiRoutes.post('/ressources', function (req,res){
	//methode de controller
	api.ressources.add(req,res);
});

apiRoutes.delete('/ressources', function (req,res){
	//methode de controller
	api.ressources.delete(req,res);
});

module.exports={
	users:users,
	ressources:ressources
};