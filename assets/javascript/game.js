
//variables 
var targetNum = Math.floor((Math.random() * 101+19));
var wins = 0;
var losses = 0;
var counter = 0;
//crystal values
var sword1 = Math.floor((Math.random() * 13));
var sword2 = Math.floor((Math.random() * 13));
var sword3 = Math.floor((Math.random() * 13));
var sword4 = Math.floor((Math.random() * 13));
//setting responsive html text up
$("#scoreToGet").html("Score to get: " + targetNum);
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
$("#count").html(counter)
//Functions

 //reset to call later
function reset(){

targetNum = Math.floor((Math.random() * 101+19));

sword1 = Math.floor((Math.random() * 13));
sword2 = Math.floor((Math.random() * 13));
sword3 = Math.floor((Math.random() * 13));
sword4 = Math.floor((Math.random() * 13));
counter = 0
$("#scoreToGet").html("Score to get: " + targetNum);
};

//winner function
function winner(){
    wins++;
    alert("Nice job, winner!")
    $("#wins").html("Wins: " + wins);
    reset()
}

function loser(){
    losses++;
    alert("Try harder next time!")
    $("#losses").html("Losses: " + losses);
    reset()
}


$("#sword1").on("click", function(){
    counter = counter + sword1;
    if (counter === targetNum){
        winner();
    }
    else if(counter > targetNum){
        loser();
    }
    $("#count").html(counter)
   
});

$("#sword2").on("click", function(){
    counter = counter + sword2;
    if (counter === targetNum){
        winner();
    }
    else if(counter > targetNum){
        loser();
    }
    $("#count").html(counter)
   
});

$("#sword3").on("click", function(){
    counter = counter + sword3;
    if (counter === targetNum){
        winner();
    }
    else if(counter > targetNum){
        loser();
    }
    $("#count").html(counter)
   
});

$("#sword4").on("click", function(){
    counter = counter + sword4;
    if (counter === targetNum){
        winner();
    }
    else if(counter > targetNum){
        loser();
    }
    $("#count").html(counter)
   
});



