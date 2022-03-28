////// storing for future use
//reset everything to 0
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");

const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");

const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById(scissors_div);

/////// set up the core function for the computer that will use math.random to loop through an array and return that value
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

/////// similar to convertCase but just takes lowercase and replaces with titlecase

function convertCase(anythingIWant) {
  if (anythingIWant === "paper") return "Paper";
  if (anythingIWant === "scissors") return "Scissors";
  return "Rock";
}

////// Winning Condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  const userName = ' (user)'.fontsize(3).sup;
  const compName = ' (comp)'.fontsize(3).sup;
  result_div.innerHTML = `<p>${convertCase(
    user
  )}${userName} beats ${convertCase(computer)}${compName}. You win!🎉🎊🎁</p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('winningStyles');
  setTimeout(() => roundStatus.classList.remove('winningStyles'), 300)
}

// Draw condition - this handles what happens when the user clicks one of the choices where the value is them passed through as a parameter
function draw (user, computer ){
    const userName = ' (user)'.fontsize(3).sup;
    const compName = ' (comp)'.fontsize(3).sup;
    result_div.innerHTML = `<p> It was a draw! You both chose ${convertCase(user)}</p>`;
    const roundStatus = document.getElementById(user);
    roundStatus.classList.add('drawStyles');
    setTimeout(() => roundStatus.classList.remove('drawStyles'), 300)
}
