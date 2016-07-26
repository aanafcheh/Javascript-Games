var targetNumber;
var guessInputText;
var guessInput;
var gameOver;
var number_Guesses = 0;

function do_Game() {
  var randomNumber = Math.random() * 100;
  var randomNumberInteger = Math.floor(randomNumber);
  targetNumber = randomNumberInteger + 1;

  while (!gameOver) {
    guessInputText = prompt("I'm thinking of a number between 1 to 100.\nWhat do you think is it?");
    guessInput = parseInt(guessInputText);
    number_Guesses += 1;
    gameOver = checkGuess();
  }
}

function checkGuess() {
  if (isNaN(guessInput)) {
    alert("Please enter a number.");
    console.log(number_Guesses);
    return false;
  }

  if ((guessInput>100) || (guessInput<1)) {
    alert("Please enter a number between 1 to 100");
    console.log(number_Guesses);
    return false;
  }

  if (guessInput > targetNumber) {
    alert("Your guess is too large");
    console.log(number_Guesses);
    return false;
  }

  if (guessInput < targetNumber) {
    alert("Your guess is too small");
    console.log(number_Guesses);
    return false;
  }
  // if (guessInput == target) {
  //   alert("You guess right!");
  //   return true;
  alert("You had" + number_Guesses + "guessse!");
  return true;

}
