//notre serveur http
const express= require('express');
const app= express();
const routes=require("./routes.js");


app.use( function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");// www.google.com monsite.com 143.45.78.23
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(routes);

app.listen(3000,(err)=>{
	console.log('CocoriCourse in da place');
})

