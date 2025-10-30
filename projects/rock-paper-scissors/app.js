const array = ["rock", "paper", "scissors"];

// this function return rock, paper or scissors
const getComputerChoice = () => {
  return array[Math.floor(Math.random() * 3)];
};

console.log(getComputerChoice());
