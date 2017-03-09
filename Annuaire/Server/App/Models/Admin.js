var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var bcrypt=require('bcrypt-nodejs');

//ADMIN SCHEMA
//--------------------------------------
var AdminSchema=new Schema({
	name:String,
	username:{type:String,required:true,index:{unique:true}},
	password:{type:String,required:true,select:false}
});

//ENCRYPTER LE PASSWORD AVANT SAVING
//--------------------------------------

AdminSchema.pre('save',function(next){
	var admin=this;
	//encrypter le password seulement si le pwd est changé au nouvel admin
	if(!admin.isModified('password')) return next();
	//generation d'encriptage
	bcrypt.hash(admin.password,null,null,function(err,hash){
		if(err) return next(err);

		admin.password=hash;
		next();
	});
});
//comparer le MDP donné avec celui de la data base
AdminSchema.methods.comparepassword=function(password){
	var admin=this;
	return bcrypt.compareSync(password,admin.password);
};
module.exports=mongoose.model('Admin',AdminSchema);