const getComputerChoice = () => {
  const randomNumber = Math.random() * 3;
  let pcChoice = "";

  if (randomNumber < 1) {
    pcChoice = "rock";
  } else if (randomNumber < 2) {
    pcChoice = "paper";
  } else {
    pcChoice = "scissors";
  }

  return pcChoice;
};

const getHumanChoice = () => {
  // trim function delete spaces
  // toLowerCase function necessary before control. example RoCk, ROCK, rock, roCK.
  const userChoice = prompt("What is your choice? (ROCK, PAPER, SCİSSORS)")
    .trim()
    .toLowerCase();
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    return userChoice;
  } else {
    console.log(
      "i don't understand your choice. i am playing this round for you."
    );
    return getComputerChoice();
  }
};

const playRound = (humanChoice, computerChoice) => {
  console.log(humanChoice, computerChoice, "choices");
  if (humanChoice === computerChoice) console.log("Draw");
  else {
    if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        computerScore++;
        console.log(
          `computer won. paper beats rock. you: ${humanScore} pc: ${computerScore}`
        );
      } else {
        humanScore++;
        console.log(
          `you won. rock beats scissors. you: ${humanScore} pc: ${computerScore}`
        );
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        humanScore++;
        console.log(
          `you won. paper beats rock. you: ${humanScore} pc: ${computerScore}`
        );
      } else {
        computerScore++;
        console.log(
          `computer won. scissors beats paper. you: ${humanScore} pc: ${computerScore}`
        );
      }
    } else {
      if (computerChoice === "paper") {
        humanScore++;
        console.log(
          `you won. scissors beats paper. you: ${humanScore} pc: ${computerScore}`
        );
      } else {
        computerScore++;
        console.log(
          `computer won. rock beats scissors. you: ${humanScore} pc: ${computerScore}`
        );
      }
    }
  }
};

const playGame = () => {
  let i = 0;
  while (i < 5) {
    playRound(getHumanChoice(), getComputerChoice());
    i++;
  }
  console.log("******************************");
  console.log(`you: ${humanScore} pc: ${computerScore}`);
  if (humanScore > computerScore) console.log("congrats you are the best");
  if (computerScore > humanScore)
    console.log("computers are amazing, you lose");
  else console.log("this round has no winner. you should try again");
};

let humanScore = 0;
let computerScore = 0;

playGame();
