'use strict';

const db=require('../../database');

const suggestions={
	create: (req,res)=>{
		db.suggestions.save()
		.then(data =>{
			res.status(200).send('operation reussi: \n' +data)
		})
		.catch(err =>{
			res.status(500).send('operation failed:\n' +err)
		})
	},
	delete: (req,res)=>{
		db.suggestions.delete({name:req.params})
		.then(data=>{
			res.status(200).send('operation reussi: \n'+data);
		})
		.catch(err=>{
			res.status(500).send("operation failed"+ err)
		})
	}
}

module.exports=suggestions;
