console.log("GAME START") // making sure that shit works



// var wordList = {
//   "bearlephant": "a made up creature",
//   "incorrect": "not correct",
//   "magic": "something... supernatural...",
//   "console": "we use this shit alllll the time",
//   "javascript": "it's what we're learning",
//   "five": "just a number... spelled out"
// };

// function pickRandomProperty(wordList) {
//   var result;
//   var count = 0;
//   for (var prop in wordList)
//     if (Math.random() < 1 / ++count)
//     mysteryWord = prop;

// }





//preping for game
var wordList = ["bearlephant", "incorrect", "magic", "console", "javascript", "five"];
var rand = Math.floor(Math.random() * wordList.length);
var mysteryWord = wordList[rand].split(""); // computer picking a word
var userGuess
var allGuess = [];
var correctGuess = [];
var lives = mysteryWord.length + 3;
// console.log("Number of lives left: " + lives)
document.getElementById("livesDisplay").innerHTML = lives;
document.getElementById("noLettersDisp").innerHTML = "This word has " + mysteryWord.length + " letters.";
document.getElementById("correct").style.visibility = "hidden";
document.getElementById("mysteryWordDisplay").style.visibility = "hidden";
document.getElementById("mysteryWordDisplay").innerHTML = mysteryWord.join("");

//checks the users guess to see if it fits in the mysterword
// function checker(userGuess) {

//   let guess = mysteryWord.find(function (letter, index) {
//     var checkx = 0;
//     if (userGuess === letter) {
//       var checkx = checkx + 1;
//       correctGuess.splice(index, 0, letter);
//       mysteryWord.splice(index, 1);
//     } else {
//       if (checkx === 0) {
//         lives = lives -1;
//       }
//     }



//   })
// }



function livesChecker(lives) {
  if (lives === 0) {
    alert("END GAME!");
  }
}


var placeHolder = [];
for (i = 0; i < mysteryWord.length; i++) {
  placeHolder.push("_")
}
function checker(userGuess) {

  for (i = 0; i < placeHolder.length; i++) {
    if (userGuess === mysteryWord[i]) {
      placeHolder[i] = userGuess;
    } else {
      lives = lives - 1;
    }
  }
}



document.onkeyup = function (event) {
  console.log(lives);
  //taking users guess
  var userGuess = event.key;
  allGuess.push(userGuess);
  userGuess = userGuess;
  console.log(placeHolder);
  console.log(mysteryWord);

  //run checker function
  checker(userGuess);
  livesChecker(lives)
  document.getElementById("correctGuesses").innerHTML = placeHolder;
  document.getElementById("allGuess").innerHTML = allGuess;
  var guess1 = placeHolder.join("");
  var word1 = mysteryWord.join("");
  if (guess1 == word1) {
    document.getElementById("correct").style.visibility = "visible";
    document.getElementById("mysteryWordDisplay").style.visibility = "visible";
    console.log("GAME END");
  }

}










