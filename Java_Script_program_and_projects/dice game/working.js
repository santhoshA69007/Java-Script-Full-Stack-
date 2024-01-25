
document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#btn").onclick=function(){
        var n=Math.floor(Math.random()*6)+1;
        var m=Math.floor(Math.random()*6)+1;
        var dice1=`images/${n}.jpg`;
        var dice2=`images/${m}.jpg`;
       
        document.querySelector("#dice1").setAttribute("src",dice1);
        document.querySelector("#dice2").setAttribute("src",dice2);
        
    };
    
    

});