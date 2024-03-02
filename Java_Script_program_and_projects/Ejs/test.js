const express=require("express");
const mongoose=require("mongoose");


const app = express();
const random_day = require(__dirname+"/random.js");
console.log(random_day());
// this for the back end data base conneciton with this only data from data base can be shown
const uri="mongodb://localhost/27017/todolistDB";
mongoose.connect(uri);

///////////this the todo schema ///////////////////////////////////

const todoSchema = mongoose.Schema({

    day:{
        type:String,
        required:true,
    },
    task:{
        type:String,
        required:true,
    }
})

const todoSchemawork = mongoose.Schema({
    day:{
        type:String,
        required:true,
    },
    task:{
        type:String,
        required:true,
    }
})

const todo=mongoose.model('todo',todoSchema);
const todowork=mongoose.model('todowork',todoSchemawork);
////////////////////////////////////////////////////////////////////////////

const todo_normal=new todo({
    day:"friday",
    task:"coding",


 })
 todo_normal.save();