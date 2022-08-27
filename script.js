let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};
const compareGuesses = (userGuess, computerGuess, secretNumber) => {
  if (userGuess < 0 || userGuess > 9) {
    alert("Please input a number between 0 and 9");
    return
  } else if (
    Math.abs(userGuess - secretNumber) <= Math.abs(computerGuess - secretNumber)
  ) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
