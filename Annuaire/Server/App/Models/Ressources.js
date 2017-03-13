var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var jsonLoader = require('./json-loader');
var ressources = require('./ressources.json');

//RESSOURCE SCHEMA
//--------------------------------------
var RessourcesSchema=new Schema({
	name:ressources.ressources.name,
    description: ressources.description,
    lien: ressources.lien,
    images: ressources.images,
    langues: ressources.langues,
    niveau: ressources.niveau,
    ages: ressources.ages,
    format: ressources.format,
    keywords:ressources.keywords,
});


module.exports=mongoose.model('Ressources',RessourcesSchema);