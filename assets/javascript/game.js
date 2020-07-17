
// first we need a list of potential words for our hang man game
const hangNames= ["hulk", "iron man", "thor", "captain america"];

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
    underscores.push("*");
 } else {
     underscores.push("_");
 }
};
console.log(underscores);