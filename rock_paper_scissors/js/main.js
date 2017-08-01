// Create a variable humanScore. Give it a value of the number 0.
// Create a variable computerScore. Give it a value of the number 0.
var humanScore = 0;
var computerScore = 0;


// Create a function play. It should accept two parameters: humanPlay and computerPlay.
// Inside the function:
function play(humanPlay,computerPlay){
  // Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
  // For example: "You played rock. The bot played scissors."
  console.log("You played " +humanPlay+ ".The bot played "+computerPlay);

  if (humanPlay===computerPlay) {
    console.log ("You tied :|");
    console.log ("You have " +humanScore+" points");
    console.log ("The bot has " +computerScore+" points");
  }


  // If the human play is equal to the computer play
  // Log "You tied. :|" to the console.

  else if (humanPlay==="paper" && computerPlay==="rock" || humanPlay==="rock" &&
    computerPlay==="scissors" || humanPlay==="scissors" && computerPlay==="paper" ){
      console.log ("You win!:)");
      console.log (humanScore+=1);
      console.log ("You have " +humanScore+" points");
      console.log ("The bot has " +computerScore+" points");
    }

    // Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
    // humanPlay is 'rock' and the computerPlay is 'scissors' OR
    // humanPlay is 'scissors' and the computerPlay is 'paper'
    // Log "You win! :)" to the console
    // Add one to the humanScore variable (be sure to use += )

    else{
      console.log ("You Lose!");
      console.log (computerScore+=1);
      console.log ("You have " +humanScore+" points");
      console.log ("The bot has " +computerScore+" points");
    }


  }
  // Otherwise log "You lose! :(" to the console
  // Add one to the computerScore variable (be sure to use += )

  // Log "You have {humanScore} points" to the console
  // For example: "You have 0 points"
  // Log "The bot has {computerScore} points" to the console.
  // For example: "The bot has 3 points"


  play("scissors", "rock");
  play("rock", "paper");
  play("paper", "rock");
  play("scissors", "paper");
  play("rock", "scissors");


/* attempted to solve bonus, but didn't get far...:(

function bestOfThree(play*3){

if (humanPlay===computerPlay && humanPlay===computerPlay && humanPlay===computerPlay
||humanPlay===computerPlay && humanPlay >= computerPlay && humanPlay<=computerPlay){

console.log ("You tied :|");
console.log ("You have " +humanScore+" points");
console.log ("The bot has " +computerScore+" points");
}

else if (humanPlay===computerPlay && humanPlay >= computerPlay && humanPlay>=computerPlay||
  humanPlay<=computerPlay && humanPlay>=computerPlay && humanPlay>=computerPlay ||
  humanPlay===computerPlay && humanPlay === computerPlay && humanPlay>=computerPlay){
  console.log ("You win!:)");
  console.log (humanScore+=3);
  console.log ("You have " +humanScore+" points");
  console.log ("The bot has " +computerScore+" points");
}
 else{
   console.log ("You Lose!");
   console.log (computerScore+=3);
   console.log ("You have " +humanScore+" points");
   console.log ("The bot has " +computerScore+" points");
 }


}

bestOfThree("rock", "paper" && "scissors", "rock" && "scissors", "paper")
bestOfThree("paper", "rock"&& "scissors", "rock" && "rock", "scissors")
bestOfThree("scissors", "paper"&& "rock", "paper" && "rock", "scissors")


  // After defining the function, call the function 5 - 6 times,
  // Providing a different play for the computer and human each time.
  // Hint: You'll need to use two arguments
  // each time you call the play function.





  // BONUS:
  // Create a "best of 3" version

  // SUPER CHALLENGE:
  // Google and implement a random choice for the computer each time.
