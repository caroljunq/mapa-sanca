const db = require("./db-connection.js");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mapCtrl = require("./controllers/map-controller");

app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req,res){
  mapCtrl.all()
  .then((coordinates) => {
    res.render('map',{results: coordinates});
  })
  .catch((err) =>{
    res.send("Banco de dados deu problema");
  });
})

app.get('/register', function(req,res){
  res.render('register');
})

app.post('/post-register', function(req,res){
  res.render('map',req.body);
})

app.listen(3000,function(){
  console.log("Ouvindo a porta 3000!");
})
