// packages
const express = require('express');
// app instance, one application
const app = express();

// route "/"
app.get('/', function(req,res){
  // the response to client is "Maoee Silvio!"
  res.send("Maoee Silvio!");
})

// open connection on port 3000
app.listen(3000,function(){
  console.log("Ouvindo a porta 3000!");
})
