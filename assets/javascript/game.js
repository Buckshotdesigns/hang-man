function startGame () {
// first we need a list of potential words for our hang man game
const hangNames= ["hulk", "ironman", "thor", "captainamerica"];
// some variables for keeping track of guesses

let lettersGuessed = [];
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

document.getElementById("random-word").innerHTML = numOfSpaces.join(" ");
document.getElementById("letters-guessed").innerHTML = lettersGuessed.join(" ");
};

function checkLetters(letter) {
    let correctLetter = false;
    for (i = 0; i < underscores; i++){
        if (lettersInName[i]=== letter){
            correctLetter = true;
        }
    }
    if (correctLetter) {
        for (j = 0; j < underscores; j++){
            if (lettersInName[j] === letter){
                numOfSpaces[j] = letter;
            };
        };
    };
}
// targeting paragraph id to print to screen

function endRound () {
    document.getElementById("random-word").innerHTML = numOfSpaces.join(" ");
document.getElementById("letters-guessed").innerHTML = lettersGuessed.join(" ");
}


startGame();
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
     
     checkLetters(userGuess);
     endRound();

     }else {
         alert("only use letters")
     };
     
 };

//  take the onkeyup key and compare it to the array of letters and replace the dashes
