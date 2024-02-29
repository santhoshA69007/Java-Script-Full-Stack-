"use strict";

var mongoose = require('mongoose'); // Connection URI


var uri = 'mongodb://localhost:27017/fruitsDB'; // Replace with your MongoDB URI
// Connect to MongoDB

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); // Get the default connection
//structure of database

var fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});
var Fruit = mongoose.model('Fruit', fruitSchema);
var fruit = new Fruit({
  name: "apple",
  rating: 5,
  review: "apple a day keeps the doctor away apple is the biggest enemy in the world for them"
}); // fruit.save();

var personSchema = new mongoose.Schema({
  name: String,
  age: Number
});
var person = new mongoose.model("Person", personSchema);
var per_doc = new person({
  name: "john",
  age: 30
});
per_doc.save();