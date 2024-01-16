
document.addEventListener("DOMContentLoaded",function(){
        var count1=0;
        var count2=0;
        function handcricket(n){
               
                var n1=Math.floor(Math.random()*3)+1;
              
                var res1=`images/${n1}.jpg`;
                var res2=`images/${n}.jpg`;
                
                document.querySelector("#computer_selected").setAttribute("src",res1);
                document.querySelector("#player_selected").setAttribute("src",res2);
                
                if(n==1 && n1==3 || n==2 && n1==1 ||  n==3 && n1==2){
                        document.querySelector("#result").innerHTML="You Win";
                        count1+=1;
                        document.querySelector("#p_count").innerHTML="player winning:"+count1;
                }
                else if(n1==1 && n==3 || n1==2 && n==1 ||  n1==3 && n==2){
                        document.querySelector("#result").innerHTML="You Lose";
                        count2+=1;
                        document.querySelector("#c_count").innerHTML="computer winning:"+count2;
                }
                
                else{ 
                        document.querySelector("#result").innerHTML="Draw";
                }
               
       
        }
       
               
             
             
                // Attach event listeners to the dice images
                var n=0;
                document.querySelectorAll(".img_game")[0].addEventListener("click", function() {
                  n = 1;
                  handcricket(n);
                  n=0;
                });
                
                document.querySelectorAll(".img_game")[1].addEventListener("click", function() {
                  n = 2;
                  handcricket(n);
                  n=0
                });
                
                document.querySelectorAll(".img_game")[2].addEventListener("click", function() {
                  n = 3;
                  handcricket(n);
                  n=0
                });
                
                // Function to update the result element
              
               
         

    
        

});