const Coordinate = require('../models/coordinate');

function all(){
  return Coordinate.find();
}

function save(coordinate){
  let new_coordinate = new Coordinate(coordinate);
  return new_coordinate.save();
}

module.exports.all = all;
module.exports.save = save;
