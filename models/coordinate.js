const mongoose = require("mongoose");

let coordinateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lng: {
    type: Number,
    required: true
  }
}, { collection: 'coordinates' });

module.exports = mongoose.model('CoordinateSchema',coordinateSchema);
