// Functions
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

function solved(event) { 

  event.preventDefault();

  // check if correct

  if( answerElement.value === wordToSolve ) {
    
    statusElement.innerHTML = "Yay 🎉";

  } else {
    
    statusElement.innerHTML = "Wrong 😢";
    console.log("answer: ", answerElement.value);
    console.log("wordToSolve: ", wordToSolve);

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

// get DOM elements
const statusElement = document.querySelector("#status");
const wordElement = document.querySelector('#word');
const answerElement = document.querySelector("#answer");
const submitElement = document.querySelector("#submit");

// pick a random word
const wordToSolve = words[Math.floor(Math.random()*words.length)]; 
wordElement.innerHTML = wordToSolve.shuffle();

// start timer
let timer = {};
window.addEventListener("load", function () {

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

});

submitElement.addEventListener('click', solved, false);
