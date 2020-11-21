const express = require('express');
const app = express();
const mongoose = require('mongoose');

//to call middlewear functions 
require('./middlewear.js')(app, express);
require('./route.js')(app);


mongoose.connect('mongodb://localhost/planets',{
  useMongoClient: true

});
//test the channal between my db and my server && my db
mongoose.connection.once('open', function(){
  console.log("connected to db-planets successfully !!!");
}).on('error', function(error){
  console.log("connection error on planets DB :", error)
})


app.listen(5000, function() {
  console.log('listening on port 5000');
});

