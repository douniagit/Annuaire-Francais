'use strict';
const mongoose = require('mongoose');
const users=require('./models/users');
const products=require('./models/products');
const ressources=require('./models/ressources')

mongoose.connect('mongodb://admin:1234@ds129050.mlab.com:29050/test-db'); //mettre l'url de mlab
mongoose.connection.on('error',err=>{
	console.log('ERROR close MongoDB process',err)});

mongoose.connection.on('connected',function(){
	console.log('MongoDB connection succes on port 27017')
});

mongoose.connection.on('disconnected',function(){
	console.log('MongoDB connection disconnected')
});

process.on('SIGINT',function{
	mongoose.connection.close(function(){
		console.log('Server process terminated. closing MongoDB')
		process.exit(0);
	});
});

const db={
	users:mongoose.model('Users',users)
	ressources:mongoose.model('Ressources',ressources)
	products:mongoose.model('Products')
}

// db.users db.ressources db.products
module.exports=db;
