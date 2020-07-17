
// first we need a list of potential words for our hang man game
const hangNames= ["hulk", "iron man", "thor", "captain america"];
// some variables for keeping track of guesses
let numberOfGuesses = 0;
let guessesLeft = 10;

// next we need the application to randomly choose one of the terms
//  generates a number with the corresponding terms 
randomHangName = Math.floor(Math.random() * hangNames.length);
console.log(randomHangName);
// grabs one of the names from the array
gameName = hangNames[randomHangName];
console.log(gameName);
// turns selected name into individual letters
lettersInName = gameName.split("");
console.log(lettersInName);
// start adding underscores and spaces for names
let underscores = [];
for (var i = 0;i < lettersInName.length; i++ ) {
 if (lettersInName[i] === (" ")){
    underscores.push("-");
 } else {
     underscores.push("_");
 }
};
console.log(underscores);

// targeting paragraph id to print to screen
let lettersPrint = document.getElementById("letters-guessed");
let randomWord = document.getElementById("random-word");
randomWord.textContent = underscores.join(" ");


// empty array for guessed letters
lettersGuessed = []
// user clicks a key to guess a letter
 document.onkeyup = function (event) {
     let userGuess = event.key;
     let letters = /^[A-Za-z]+$/;
    //  validating user key
     if (userGuess.match(letters)) {
     console.log(userGuess);
     lettersGuessed.push(userGuess);
     console.log(lettersGuessed);
     lettersPrint.textContent = lettersGuessed;
     }else {
         alert("only use letters")
     };
     
 };