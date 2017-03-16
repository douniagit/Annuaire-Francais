'use strict';

const db=require('../../database');
//apres params on pourrait ecrire une ofnction callback, mais
//mongoose nous permet de faire des promesses

const products={
	find:function(req,res){
		db.products.find({name:req.params})
		.then(data=>{
			res.send(data);
		})
		.catch(err=>{
			res.send("operation failed"+ err)
		})
	}
}
module.exports=products;