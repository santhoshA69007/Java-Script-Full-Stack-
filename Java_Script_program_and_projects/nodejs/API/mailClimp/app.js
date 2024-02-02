//jshint esversion:6
const express=require('express');
const https=require('https');
const app=express();
app.use(express.urlencoded({ extended: true }));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
})
app.post("/signup",function(req,res){
    const email= req.body.email;
    const password= req.body.password;
    const fName=req.body.firstName;
    const lName=req.body.lastName;
    const data={
        members:[
            {
        email_address: email,
        status: "subscribed",
        merge_fields:{
            FNAME: fName,
            LNAME: lName,
        }
        }
        ]
    };
    const jsonData=JSON.stringify(data);
    const options={
        method:"POST",
        auth:"santhosh:15c2b3debb61eeac37e4aa74f4b2ea7c-us21"
    }
    const url="https://us21.api.mailchimp.com/3.0/lists/843903887f";
    const request=https.request(url,options,function(response){
        response.on("data",function(){
        
            console.log(data)
        });

    });
    request.write(jsonData)
    request.end()
    res.sendFile(__dirname+"/success.html");
})
app.listen("3000",function(){
    console.log("sever is runing on port 3000");
});
// 15c2b3debb61eeac37e4aa74f4b2ea7c-us21
// 843903887f