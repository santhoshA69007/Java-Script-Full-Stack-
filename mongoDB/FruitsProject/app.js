
var mongoose = require('mongoose'); // Connection URI

var uri = 'mongodb://localhost:27017/fruitsDB'; // Replace with your MongoDB URI
// Connect to MongoDB

mongoose.connect(uri); // Get the default connection

//structure of database
const fruitSchema= new mongoose.Schema({
  _id:{
    type:Number,
    required:true,
  },
  name:{
    type:String,
    required:true
  },
  rating:Number,
  review:String
});

const Fruit=mongoose.model('Fruit', fruitSchema);

const personSchema=new mongoose.Schema({
  _id:{
    type:Number,
    required:true,
  },
  name:String,
  age:Number,
  fav_fruit:fruitSchema,
});

const person=new mongoose.model("Person",personSchema);
const per_doc=new person({
  _id:1,
  name:"john",
  age:30
});
// per_doc.save();

    const pineapple=new Fruit({
      _id:4,
      name:"pineapple",
      rating:4,
      review:"like its smell but its spikey!!"
      });

// Fruit.insertMany([pineapple]);
async function working(){
  const res= await Fruit.find({rating:{$gt:1}})
  res.forEach((fruit)=>{
    console.log(fruit.rating);
    console.log("inserted successfully!");
  })
  // await person.updateOne({name:"john"},{fav_fruit:pineapple});
 console.log("updated successfully!");
}
working();
async function working(){
  const res= await person.find()
  res.forEach((person)=>{
    console.log(person);

  })
  // await person.updateOne({name:"john"},{fav_fruit:pineapple});
 console.log("updated successfully!");
}
working();


