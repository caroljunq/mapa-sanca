const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req,res){
  res.render('map');
})

app.get('/register', function(req,res){
  res.render('register');
})

app.post('/post-register', function(req,res){
  res.render('map');
  console.log(req.body);
})

app.listen(3000,function(){
  console.log("Ouvindo a porta 3000!");
})
