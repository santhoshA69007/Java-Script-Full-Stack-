
var mongoose = require('mongoose'); // Connection URI


var uri = 'mongodb://localhost:27017/fruitsDB'; // Replace with your MongoDB URI
// Connect to MongoDB

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}); // Get the default connection

//structure of database
const fruitSchema= new mongoose.Schema({
  name:String,
  rating:Number,
  review:String
});

const Fruit=mongoose.model('Fruit', fruitSchema);
const fruit=new Fruit({
name:"apple",
rating:5,
review:"apple a day keeps the doctor away apple is the biggest enemy in the world for them"
});
// fruit.save();
const personSchema=new mongoose.Schema({
  name:String,
  age:Number
});

const person=new mongoose.model("Person",personSchema);
const per_doc=new person({
  name:"john",
  age:30
});
per_doc.save();