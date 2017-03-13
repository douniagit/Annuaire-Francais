var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var jsonLoader = require('./json-loader');
var ressources = require('./ressources.json');

//RESSOURCE SCHEMA
//--------------------------------------
var RessourcesSchema=new Schema({
	name:String,
    description: String,
    lien: String,
    images: String,
    langues: [String],
    niveau: [String],
    ages: [Number],
    format: [String],
    keywords:[String],
});


module.exports=mongoose.model('Ressources',RessourcesSchema);