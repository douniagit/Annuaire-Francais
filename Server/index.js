//SETUP
//-------------------------------------------------
var express		=require('express');
var app			=express();
var bodyParser  =require('body-parser');
var morgan		=require('morgan');
var mongoose	=require('mongoose');
var port   		=process.env.PORT||8080;
var User		=require('./app/models/user');
//CONNEXION DB
//-------------------------------------------------
mongoose.connect('mongodb://localhost:27017/myDB');


//CONFIG APP
//-------------------------------------------------
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//CONFIG ACCES HANDLE CORS REQUEST
//-------------------------------------------------
app.use(function(req,res,next){
	res.setHeader('Acces-Control-Allow-Origin', '*');
	res.setHeader('Acces-Control-Allow-Method', 'GET','POST');
	res.setHeader('Acces-Control-Allow-Headers','X-requested-With,content-type,Authorization');
	next();
});

//LOGS DE TOUTES LES REQUETES DANS LA CONSOLE
//------------------------------------------------
app.use(morgan('dev'));

//ROUTES POUR LES API
//------------------------------------------------
app.get('/',function(req,res){
	res.send("hello HomePage");
})
//DEFINITION DES ROUTES
//------------------------------------------------

var apiRouter=express.Router();
apiRouter.get('/',function(req,res){
	res.join({message:"on est sur une API"});
});

apiRouter.route('/admin')
	.post(function(req,res){
		var user= new User();

		user.name=req.body.name;
		user.username=req.body.username;
		user.password=req.body.password;

		user.save(function(err){
			if(err){
				if(err.code==11000)
					return res.json({success:false,message:"User deja existant."});
				else
					return res.send(err);
			}
				res.json({message:"successfull"});
		});
	})
	.get(function(req,res){
		User.find(function(err,user){ //User, est en fait mongoDB
			if(err) res.send(err);
			res.json(user);
	});
});

apiRouter.route('/admin/:user_id')
	.get(function(req,res){
		User.findById(req.params.user_id,function(err,user){
			if(err) res.send(err);

			res.json(user)
		});
	})
	.put(function(req,res){
			User.findById(req.params.user_id, function(err,user){
			if(err) res.send(err);

			if(req.body.name) user.name=req.body.name;
			if(req.body.username) user.username=req.body.username;
			if(req.body.password) user.password=req.body.password;

			user.save(function(err){
				if(err) res.send(err);

				res.json({message:"User est mis à jour"});
			});
	});	
	})		
	.delete(function(req,res){
		User.remove({
		_id:req.params.user_id
		}, function(err,user){
		if(err) return res.send(err);
		res.json({message:"supprimé"});
		});
	});


//PREFIXE POUR LES ROUTES
//------------------------------------------------
app.use('/api',apiRouter);
//SERVER START
//------------------------------------------------
app.listen(port);
console.log("Annuaire linguistique :" + port)
