'use strict';


const users = require('./controllers/users');
const ressources= require('./controllers/ressources');
const products= require('./controllers/products');
const bodyParser=require('body-parser');


const apiRoutes=new Router();
// pour définir les routes

apiRoutes.use(bodyParser.urlencoded({extended:false}));
apiRoutes.use(bodyParser.json());


//------------------users--------------------

apiRoutes.get('/users', function (req,res){
	//methode de controller
	api.users.create(req,res);
});

apiRoutes.get('/users', function (req,res){
	//methode de controller
	api.users.find(req,res);
});

apiRoutes.post('/users', function (req,res){
	
	api.users.update(req,res);
});

apiRoutes.post('/products', function (req,res){
	
	api.products.find(req,res);
});

//------------------Ressources--------------------

apiRoutes.get('/ressources', function (req,res){
	//methode de controller
	api.ressources.create(req,res);
});

apiRoutes.get('/ressources', function (req,res){
	//methode de controller
	api.ressources.find(req,res);
});


module.exports={
	users:users,
	ressources:ressources,
	products:products
};