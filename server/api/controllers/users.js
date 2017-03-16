'use strict';

const db=require('../../database');

const users={
	create: (req,res)=>{
		//je cree mon user
		var newUser= new db.users(req.body); //ca signifie var newUser= new UserSchema({email:'x@gmail.com'})
		newUser.save()
		.then(data =>{
			res.status(200).send('operation reussi: \n' +data)
		})
		.catch(err =>{
			res.status(500).send('operation failed:\n' +err)
		})
	}
}

module.exports=users;