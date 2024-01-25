
var comp_Arr=[];
var user_Arr=[];
var t=1600;
var level=0;

function user_Input(){
    $(document).on("click", "#blue, #green, #yellow, #red", function(event) {
    
        user_Arr.push(event.target.id); // Uncomment if needed
        console.log(event.target.id);
        console.log(user_Arr);
        var soundFile;
        let audio;
      
        if (event.target.id === "blue") {
          soundFile = "sounds/1.mp3";
          
          audio = new Audio(soundFile);
        } else if (event.target.id === "green") {
          soundFile = "sounds/2.mp3";
          audio = new Audio(soundFile);
        } else if (event.target.id === "red") {
          soundFile = "sounds/3.mp3";
          audio = new Audio(soundFile);
        } else if (event.target.id === "yellow") {
          soundFile = "sounds/4.mp3";
          audio = new Audio(soundFile);
        }
      
        try {
          audio.play();
        } catch (error) {
          console.error("Error playing sound:", error);
        }
      });
}
var currentlyPlaying = false;

function computer() {

  for (var i = 1; i <= 4; i++) {
    (function () {
      var n = Math.floor(Math.random() * 4) + 1;
      setTimeout(function () {
        if (!currentlyPlaying) {
          sound(n);
        }
      }, i * 2000);
    })();
  }
}

function sound(n) {
 
  if (!currentlyPlaying) {
    currentlyPlaying = true;
    var audio = new Audio(`sounds/${n}.mp3`);
    if(n==1){
        comp_Arr.push("blue");
    }
    else if(n==2){
        comp_Arr.push("green");
    }
    else if(n==3){
        comp_Arr.push("red");
    }
    else if(n==4){
        comp_Arr.push("yellow");
    }
   
    $(`.${n}`).addClass("pressed");
  
    audio.play().then(() => {
      setTimeout(function () {
      $(`.${n}`).removeClass("pressed");

    },100);
      currentlyPlaying = false;
    });
  }
  
} // Add a closing curly brace here

// function computer() {
//     for (var i = 1; i <= 4; i++) {
//         // Using an IIFE to capture the value of n for each iteration
//         (function () {
//             var n = Math.floor(Math.random() * 4) + 1;
//             setTimeout(function () {
//                 sound(n);
//             }, i * 2000);
//         })();
//     }
// }

// function sound(n) {

  
//     var audio = new Audio(`sounds/${n}.mp3`);
//     $(`.${n}`).addClass("pressed");
//     audio.play();
//     setTimeout(function () {
//         $(`.${n}`).removeClass("pressed");
//     }, 1000);
    

// }

function checkRound() {
  for (var i = 0; i < user_Arr.length; i++) {
      for (var j = 0; j < comp_Arr.length; j++) {
        if (comp_Arr.toString() === user_Arr.toString()) {
          if (comp_Arr.length === level) {
              setTimeout(function () {
                  gameRound();
              }, 1000);
          }
      } else {
          endGame();
      }
          }
      }
  }
  function gameRound() {
    user_Arr = [];
    comp_Arr = [];
    level++;

    setTimeout(function () {
        computer();
        $("#count").html("WATCH!");
    }, 1000);

    setTimeout(function () {
        user_Input();
        $("#count").html("YOUR TURN!");
    }, level * 2000 + 1000);
}

function gameworking() {
  level = 0;
  $("h1").html("Level 1");
  gameRound();
}
function endGame() {
    $("h1").html("Game Over, Press A to Restart");
    var audio = new Audio(`sounds/wrong.mp3`);
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
    level = 0;
}






$(document).keydown(function(event) {
    if (event.key === "a") {
      $("h1").html("Level 1");
     gameworking();
    }
  });
