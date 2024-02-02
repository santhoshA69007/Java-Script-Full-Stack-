//jshint esversion:6
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({urlencoded: true}));
app.use(express.json());
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
})
app.post("/signup",function(req,res){
    var email= req.body.email;
    var password= req.body.password;
    console.log(email,password);
})
app.listen("3000",function(){
    console.log("sever is runing on port 3000");
});
