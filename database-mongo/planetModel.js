const mongoose = require('mongoose');

const planetModel = new mongoose.Schema({
  name : {
    type: String,
    unique: true,
    required: true,
  },
  orderSunAccordingly : {
    type: Number,
  },
  alternativeName : {
    type: String,
  },
 avgSpeed : {
    type: Number,
  },
  imageSrc : {
    type: String,
  },
  sourceUrl : {
    type: String,
  },
  meanRadius : {
    type: Number,
  },
  circumfrence : {
    type: Number,
  },
  surfaceArea : {
    type: Number,
  },
  polarRadius : {
    type: Number,
  }, 
  surfaceGravity : {
    type: Number,
  }, 
  surfacetemp : {
    type: Number,
  }, 
  surfacePressure : {
    type: Number,
  }, 
  moons : {
    type: Number,
  }
});


//return set of methods according to the schema eg. find({}) 
 
exports.Planet = mongoose.model('planet', planetModel);


