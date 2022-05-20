const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://truong1120:060700@cluster0.pawil.mongodb.net/web';

mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected',()=>{
    console.log('MongoDB Connection Sucessfull');
})

db.on('error',()=>{
    console.log('Mongo DB Connection Failed');
})

module.exports = mongoose