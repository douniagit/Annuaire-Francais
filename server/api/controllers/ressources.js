'use strict';

const db=require('../../database');

const ressources={
	create: (req,res)=>{
		var newRessource= new db.ressources(req.body);
		newRessource.save()
		.then(data =>{
			res.send('donnee ajoutee: \n' +data)
		})
		.catch(err =>{
			res.send('donnee failed:\n' +err)
		});
	},
	find: (req,res)=>{
		var newRessource= new db.ressources(req.body);
		newRessource.save()
		.then(data =>{
			res.send('donnee ajoutee: \n' + data)
		})
		.catch(err =>{
			res.send('donnee failed:\n' +err)
		});
	},
	update: (req,res)=>{

	},
	deleteOne: (req,res)=>{
		db.blabla.deleteOne
	}
	
}




// const Ressource = require('./database/ressources');

// apiRoutes.get(':/id', function(req, res) {

//   Ressource.findById(req.params.id, function(err, user) {

//     if (err) return res.status(500).send("There was a probleme finding the card.");
//     if(!ressource) return res.status(404).send("No card found.");

//     res.status(200).send(ressource);

//   });

});
module.exports=ressources;