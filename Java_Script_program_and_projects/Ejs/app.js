const express=require("express");
const strftime=require("strftime");
const app = express();
const random_day = require(__dirname+"/random.js");
console.log(random_day());

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.set('view engine','ejs')
app.use(express.static('public'));
var day=strftime("%A-%m-%d");
// this line is for list that appears on the front page or someother page 
let list=["Buy Food","Cook Food","Eat Food","Sleep","Repeat"];
// this line is for list that appears on the front page or someother page
let work_list=[]

app.get('/', function(req,res){
   
    res.render("list",{kindOfDay:day,list:list});
})
app.get('/work', function(req,res){
    
    res.render("list",{kindOfDay:"work",list:work_list});
});
app.get('/about', function(req,res){
    
    res.render("about",{kindOfDay:"work",list:work_list});
});
app.post('/',function(req,res){
    console.log(req.body);
    let user_input=req.body.input;
    if(req.body.button==="work"){
        console.log(work_list);
        work_list.push(user_input);
        res.redirect('/work');
    }
    else{
    
    list.push(user_input);
    res.redirect('/');
}
    
});
// app.post('/work',function(req,res){
   
   
// });
app.listen("3000", function(){
    console.log("listening da")
})
