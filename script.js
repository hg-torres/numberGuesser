function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function filterInt(value) {
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value)
  } else {
    return NaN
  }
}

function playGame(){

  let randomNumber = getRandomInt(1, 16);
  console.log(randomNumber);
  let i = 0;

  do {
    let userGuess = prompt('Pick a number between 1 and 15');
    let userIntGuess = filterInt(userGuess);

    if (userIntGuess === randomNumber) {
      alert(`You got it right. Number was ${randomNumber}. Your guess was ${userIntGuess}.`)
      i = 6;
    }
    else {
      i++
      if (i === 5) {
        alert(`Answer was ${randomNumber}. Better luck next time.`)
      } else {
        alert(`${i} out of 5: Try again!`);
      }
    }
  }
  while (i < 5);
}

document.getElementById("myBtn").addEventListener("click", playGame);
