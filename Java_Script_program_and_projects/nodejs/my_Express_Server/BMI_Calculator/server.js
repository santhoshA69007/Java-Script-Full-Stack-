const express= require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', function(req, res){
    res.sendFile(__dirname +"/index.html");

});
app.post('/bmi_result', function(req, res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var result=weight / (height * height);
    res.send("The result of the calculation is "+result);
});
app.listen("3000",function(){
    console.log("Server started on port 3000");
})