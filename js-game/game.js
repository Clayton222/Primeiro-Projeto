var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 10) + 1;
/*console.log(answer);*/
var no_of_guesses = 0;
var guessed_number =[];

document.addEventListener("keypress", function(e) {
    if(e.key === "Enter"){
        const btn =document.querySelector("#my_btn");
        btn.click();
    }
        })

function play(){
    var user_guess = document.getElementById("guess").
    value;
   

    if(user_guess <1 ||   user_guess> 10 ){
        alert("Please enter a number between 1 and 10.");
    }
    else {
        guessed_number.push(user_guess);
        no_of_guesses+= 1;
        if(user_guess != answer){
            msg1.textContent = "Your guess is not the number.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " + guessed_number;
            
        }
        else if(user_guess == answer){
            msg1.textContent = "Yippie Your guess is the number!!!";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guessed it in: " + no_of_guesses + " guesses";

            document.getElementById("my_btn").disabled = true;
            document.getElementById("btnRestart").disabled = false;
        
        }
        
    }
}

function restart() {
        document.location.reload(true);}
