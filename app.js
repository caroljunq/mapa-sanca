const db = require("./db-connection.js");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mapCtrl = require("./controllers/map-controller");

app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req,res){
  let obj = {
    name: "teste",
    description: "descricao",
    author: "alguem",
    lat: "123",
    lng: "44"
  };
  mapCtrl.all()
  .then((coordinates) => {
    console.log(coordinates)
  })
  .catch((err) =>{
    res.send("Banco de dados deu problema");
  });
  res.render('map',obj);
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
