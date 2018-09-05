const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// alternatives
// mongodb://localhost:27017/mapa-sanca
mongoose.connect("mongodb://aluno:secomp123@ds233212.mlab.com:33212/mapa-sanca", { useNewUrlParser: true },function(err){
  if(err){
    console.log(err);
  }
});
