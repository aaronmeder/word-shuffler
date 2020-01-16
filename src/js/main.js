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

// Initialize DOM elements
// -----------------------

// get DOM elements
const statusElement = document.querySelector("#status");
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

  // start timer
  startTimer();

}

function startTimer () {

  let timer = {};

  timer.end = 15;
  const timerElement = document.querySelector("#timer");
  timerElement.innerHTML = timer.end;

  if ( timer.end > 0 ) {
    
    timer.ticker = setInterval( function () {

      // stop if passed end
      timer.end--;
      if ( timer.end <= 0 ) {
        clearInterval( timer.ticker );
        timer.end = 0;
      }

      // update time
      timerElement.innerHTML = timer.end;

    }, 1000);

  }

}

function solved(event) { 

  event.preventDefault();

  // check if correct

  if( answerElement.value === window.wordToSolve ) {
    
    statusElement.innerHTML = "Yay 🎉";

  } else {
    
    statusElement.innerHTML = "Wrong 😢";

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
