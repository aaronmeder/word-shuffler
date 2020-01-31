// Helper Functions
// -----------------------

String.prototype.shuffle = function () {
  var a = this.split(""),
      n = a.length;

  for(var i = n - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
  }
  return a.join("");
}

// Initialize 
// -----------------------

// set starting values
window.userCurrentScore = 0;

// get DOM elements
const statusElement = document.querySelector("#status");
const scoreELement = document.querySelector("#current-score");
const wordElement = document.querySelector('#word');
const answerElement = document.querySelector("#answer");
const submitElement = document.querySelector("#submit");


// Game functions
// -----------------------

// start a new game round
function startNewRound () {

  // pick a random word
  window.wordToSolve = words[Math.floor(Math.random()*words.length)]; 
  wordElement.innerHTML = window.wordToSolve.shuffle();

  // reset status
  statusElement.innerHTML = "Guess the word";
  answerElement.value = "";

  // start timer
  clearTimer();
  startTimer();

}

function startTimer () {

  window.timer = {};

  window.timer.end = 15;
  const timerElement = document.querySelector("#timer");
  timerElement.innerHTML = window.timer.end;

  if ( window.timer.end > 0 ) {
    
    window.timer.ticker = setInterval( function () {

      // stop if passed end
      window.timer.end--;
      if ( window.timer.end <= 0 ) {
        clearInterval( window.timer.ticker );
        window.timer.end = 0;
      }

      // update time
      timerElement.innerHTML = window.timer.end;

    }, 1000);

  }

}

function clearTimer () {
  clearInterval( window.timer.ticker );
}

function solved(event) { 

  event.preventDefault();

  // check if correct

  if( answerElement.value === window.wordToSolve ) {

    // set user score
    window.userCurrentScore = window.userCurrentScore + 10;
    scoreELement.innerHTML = window.userCurrentScore;

    
    // update status
    statusElement.innerHTML = "Correct 🎉";
    statusElement.innerHTML += "<br />Starting next round...";

    setTimeout( startNewRound(), 2000);

  } else {
    
    statusElement.innerHTML = "Oops wrong word 🤷🏻‍♂️";
    statusElement.innerHTML += "<br />Starting next round...";

    setTimeout( startNewRound(), 2000);

  }

}

// Word Shuffler 
// -----------------------

const words = [
  'house',
  'animal',
  'farm',
  'train',
  'colorful'
];

// On Page load
window.addEventListener("load", function () {

  startNewRound();

});

submitElement.addEventListener('click', solved, false);
