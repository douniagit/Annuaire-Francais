'use strict';

const db=require('../../database');
//apres params on pourrait ecrire une ofnction callback, mais
//mongoose nous permet de faire des promesses

const ressources={
	create: (req,res)=>{
		var newRessource= new db.ressources(req.body);
		newRessource.save()
		.then(data =>{
			res.status(200).send('donnee ajoutee: \n' +data)
		})
		.catch(err =>{
			res.status(500).send('donnee failed:\n' +err)
		});
	},
	find:function(req,res){
		db.ressources.find({name:req.params})
		.then(data=>{
			res.status(200).send(data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	}
	findById:function(req,res){
		db.ressources.findById({req.params.id}) //({id:req.params})
		.then(data=>{
			res.status(200).send(data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	}
	findByKeywords:function(req,res){
		db.ressources.findByKeywords({req.params.keywords})//({keywords:req.params})
		.then(data=>{
			res.status(200).send(data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	}
	update: (req,res)=>{
		db.ressources.update({name:req.params})
		.then(data=>{
			res.status(200).send(data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	},
	delete: (req,res)=>{
		db.ressources.delete({name:req.params})
		.then(data=>{
			res.status(200).send(data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	}
	
}

module.exports=ressources;