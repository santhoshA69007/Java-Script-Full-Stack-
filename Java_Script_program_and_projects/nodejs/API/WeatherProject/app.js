const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const https=require("https");
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/",function(req,res){
    

https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
        const weatherData=JSON.parse(data);
        const temp=weatherData.main.temp;
        const icon=weatherData.weather[0].icon;
      
        res.write("<h1>The weather is currently "+temp+"</h1>");
        res.write("<p>The weather is currently "+weatherData.weather[0].description+"</p>");
        const img="http://openweathermap.org/img/wn/"+icon+"@2x.png";
        
        res.write(`<img style="height:100px; width: 100px;" src=${img}>`);
        res.send();
    });
    
}); 

    
});
app.post("/output",function(req,res){
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${req.body.dropdown}&appid=${req.body.input}&units=metric`;
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
        const weatherData=JSON.parse(data);
        const temp=weatherData.main.temp;
        const icon=weatherData.weather[0].icon;
      
        res.write("<h1>The weather is currently "+temp+"</h1>");
        res.write("<p>The weather is currently "+weatherData.weather[0].description+"</p>");
        const img="http://openweathermap.org/img/wn/"+icon+".png";
        
        res.write(`<img style="height:100px; width: 100px;" src=${img}>`);
        res.send();
    });


    });
});

app.listen("3000", function() {
    console.log("server is running on the port 3000");
});