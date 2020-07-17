
// first we need a list of potential words for our hang man game
const hangNames= ["hulk", "iron man", "thor", "captain america"];

// next we need the application to randomly choose one of the terms

randomHangName = Math.floor(Math.random() * hangNames.length);
console.log(randomHangName);

gameName = hangNames[randomHangName];
console.log(gameName);