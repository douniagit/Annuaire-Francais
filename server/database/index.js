'use strict';
const mongoose = require('mongoose');
const users=require('./models/users');
const ressources=require('./models/ressources');

<<<<<<< HEAD
mongoose.connect('mongodb://admin:1234@ds129050.mlab.com:29050/test-db'); //mettre l'url de mlab

// mongoose.connect('mongodb://localhost:27017/test-db'); //mettre l'url de mlab
=======
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:1234@ds129050.mlab.com:29050/test-db'); //mlab

// mongoose.connect('mongodb://localhost:27017/test-db'); //local
>>>>>>> 1db1903b8408467236f4f45117a4ed3344883964
mongoose.connection.on('error',err=>{
	console.log('ERROR close MongoDB process',err)});

mongoose.connection.on('connected',function(){
	console.log('MongoDB connection succes on Mlab')
});

mongoose.connection.on('disconnected',function(){
	console.log('MongoDB connection disconnected')
});

process.on('SIGINT', function() {
	mongoose.connection.close(function(){
		console.log('Server process terminated. closing Mlab')
		process.exit(0);
	});
});

const db = {
	users:mongoose.model('Users', users),
	ressources:mongoose.model('Ressources', ressources)
}

// db.users db.ressources
module.exports=db;
