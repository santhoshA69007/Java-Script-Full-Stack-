//adding class to the html element
$("h1").addClass("big-title margin-50");
//changing or adding html to the h1 or replace it with other elements

$("h1").html("<i>BBYE!</i>");
//changing the attribute
$("a").attr("href","https://www.google.com")
$("button").click(function(){
  $("h1").css("color","purple");
});
//event listener
$("h1").on("click",function(){
  $("h1").css("color","purple");
});
//animation: hide and show
$(".hide-btn").on("click",function(){
  $("h1").hide();
});
$(".show-btn").on("click",function(){
  $("h1").show();
});
//animation toggle
$(".toggle-btn").on("click",function(){
  $("h1").toggle();//removes the element in the html flow when clicked it comes back i think!
});
//animation: fade in and fade out
$(".fadeout-btn").on("click",function(){
  $("h1").fadeOut();
});

$(".fadein-btn").on("click",function(){
  $("h1").fadeIn();
});
//animation: slide up and slide down
$(".slideUp-btn").on("click",function(){
  $("h1").slideUp();
});

$(".slideDown-btn").on("click",function(){
  $("h1").slideDown();
});
//aniamtion :slide toggle
$(".slideToggle-btn").on("click",function(){
  $("h1").slideToggle();
});
//animation: animate
$(".animate-btn").on("click",function(){
  $("h1").animate({opacity:0.5,fontSize: "12rem"});
});
//animation: chaining or combing animations
$(".combo-btn").on("click",function(){
  $("h1").slideUp().slideDown().animate({opacity:0.5,fontSize: "12rem"});
});
//changing the text of the h1
$("input").keypress(function(event){
  $("h1").text(event.key);
});


