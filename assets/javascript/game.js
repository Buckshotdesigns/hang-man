
// first we need a list of potential words for our hang man game
const hangNames= ["hulk", "ironman", "thor", "captainamerica"];
// some variables for keeping track of guesses


// next we need the application to randomly choose one of the terms
//  generates a number with the corresponding terms 
randomHangName = hangNames[Math.floor(Math.random() * hangNames.length)];
console.log(randomHangName);
// turns selected name into individual letters
lettersInName = randomHangName.split("");
console.log(lettersInName);
// start adding underscores and spaces for names
underscores = lettersInName.length
console.log(underscores);

numOfSpaces = [];
for (i = 0; i < underscores; i++) {
numOfSpaces.push("_");
};
console.log(numOfSpaces);
// targeting paragraph id to print to screen
let lettersPrint = document.getElementById("letters-guessed");
let randomWord = document.getElementById("random-word");
randomWord.textContent = numOfSpaces.join(" ");


// empty array for guessed letters
lettersGuessed = []
// user clicks a key to guess a letter
 document.onkeyup = function (event) {
     
    //  validating user key
    if (event.keyCode >= 65 && event.keyCode <= 90) {
     let userGuess = event.key;
     console.log(userGuess);
     lettersGuessed.push(userGuess);
     console.log(lettersGuessed);
     lettersPrint.textContent = lettersGuessed;
     

     }else {
         alert("only use letters")
     };
     
 };

//  take the onkeyup key and compare it to the array of letters and replace the dashes
