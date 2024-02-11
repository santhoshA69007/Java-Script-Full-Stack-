const express=require("express");
const strftime=require("strftime");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.set('view engine','ejs')
var day=strftime("%Y-%m-%d");
var list=[];
app.get('/', function(req,res){
   
    res.render("list",{kindOfDay:day,item:""});
})
app.post('/',function(req,res){
    let user_input=req.body.input;
    list.push(user_input);
    console.log(user_input)
    res.render("list", {kindOfDay:day,item:user_input,list:list});
});
app.listen("3000", function(){
    console.log("listening da")
})
