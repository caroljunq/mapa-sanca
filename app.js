const express = require('express');
const app = express();

app.get('/', function(req,res){
  res.send("Maoee Silvio!");
})

app.listen(3000,function(){
  console.log("Ouvindo a porta 3000!");
})
