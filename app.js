const express = require('express');
const app = express();

app.set('view engine','ejs');

app.get('/', function(req,res){
  res.render('map');
})

app.get('/register', function(req,res){
  res.render('register');
})

app.listen(3000,function(){
  console.log("Ouvindo a porta 3000!");
})
