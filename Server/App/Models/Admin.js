var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var bcrypt=require('bcrypt-nodejs');

//USER SCHEMA
//--------------------------------------
var UserSchema=new Schema({
	name:String,
	username:{type:String,required:true,index:{unique:true}},
	password:{type:String,required:true,select:false}
});

//ENCRYPTER LE PASSWORD AVANT SAVING
//--------------------------------------

UserSchema.pre('save',function(next){
	var user=this;
	//encrypter le password seulement si le pwd est changé au nouveau user
	if(!user.isModified('password')) return next();
	//generation d'encriptage
	bcrypt.hash(user.password,null,null,function(err,hash){
		if(err) return next(err);

		user.password=hash;
		next();
	});
});
//comparer le MDP donné avec celui de la data base
UserSchema.methods.comparepassword=function(password){
	var user=this;
	return bcrypt.compareSync(password,user.password);
};
module.exports=mongoose.model('User',UserSchema);