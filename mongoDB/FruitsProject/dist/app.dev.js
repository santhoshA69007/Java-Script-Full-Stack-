"use strict";

var mongoose = require('mongoose'); // Connection URI


var uri = 'mongodb://localhost:27017/fruitsDB'; // Replace with your MongoDB URI
// Connect to MongoDB

mongoose.connect(uri); // Get the default connection
//structure of database

var fruitSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rating: Number,
  review: String
});
var Fruit = mongoose.model('Fruit', fruitSchema);
var personSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true
  },
  name: String,
  age: Number,
  fav_fruit: fruitSchema
});
var person = new mongoose.model("Person", personSchema);
var per_doc = new person({
  _id: 1,
  name: "john",
  age: 30
}); // per_doc.save();

var pineapple = new Fruit({
  _id: 4,
  name: "pineapple",
  rating: 4,
  review: "like its smell but its spikey!!"
}); // Fruit.insertMany([pineapple]);

function working() {
  var res;
  return regeneratorRuntime.async(function working$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Fruit.find({
            rating: {
              $gt: 1
            }
          }));

        case 2:
          res = _context.sent;
          res.forEach(function (fruit) {
            console.log(fruit.rating);
            console.log("inserted successfully!");
          }); // await person.updateOne({name:"john"},{fav_fruit:pineapple});

          console.log("updated successfully!");

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

working();