
let numberOfGuesses;
let wins = 0;
let losses = 0;
let lettersGuessed = [];

function startGame () {
// first we need a list of potential words for our hang man game
const hangNames= ["hulk", "ironman", "thor", "captainamerica", "spiderman", "wonderwoman, batman"];
// some variables for keeping track of guesses

lettersGuessed = [];
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
numberOfGuesses = underscores + 2;

numOfSpaces = [];
for (i = 0; i < underscores; i++) {
numOfSpaces.push("_");
};
console.log(numOfSpaces);

document.getElementById("random-word").innerHTML = numOfSpaces.join(" ");
document.getElementById("letters-guessed").innerHTML = "Letter Guessed: " + lettersGuessed.join(" ");
document.getElementById("guesses-remaining").innerHTML = "Number of Guesses Remaining: " + numberOfGuesses;
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
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
                numberOfGuesses--;
            };
        };
        
    } else {
        numberOfGuesses--;
    }
    endRound();
}
// targeting paragraph id to print to screen

function endRound () {
document.getElementById("random-word").innerHTML = numOfSpaces.join(" ");
document.getElementById("letters-guessed").innerHTML = "Letters Guessed: " + lettersGuessed.join(" ");
document.getElementById("guesses-remaining").innerHTML = "Number of Guesses Remaining: " + numberOfGuesses;
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
checkWin();


};
function checkWin() {
    if (numOfSpaces.join("") === randomHangName) {
        setTimeout(function(){alert("you win"); }, 300);
        wins++;
        setTimeout(startGame, 400);
        
    }else if (numberOfGuesses === 0){
        setTimeout(function(){alert("you lose"); }, 300);
        losses++;
        setTimeout(startGame, 400);
    }
}



startGame();
// empty array for guessed letters
// lettersGuessed = []
// user clicks a key to guess a letter
 document.onkeyup = function (event) {
     
    //  validating user key
    if (event.keyCode >= 65 && event.keyCode <= 90) {
     let userGuess = event.key;
     console.log(userGuess);
     for (k = 0; k < lettersGuessed.length; k++){
        if (lettersGuessed[k] === userGuess) {
            alert("you already guessed that letter");
            return;
        }
    }
     lettersGuessed.push(userGuess);
     console.log(lettersGuessed);
     
     checkLetters(userGuess);
     
     

     }else {
         alert("only use letters")
     };
     
 };

//  take the onkeyup key and compare it to the array of letters and replace the dashes
