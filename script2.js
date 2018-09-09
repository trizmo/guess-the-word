
$(document).ready(function () {

  // ### PREPPING FOR GAME ###
  // #########################

  console.log("GAME START")
  var gameStatus = true; // Indicates 
  var wordList = ["bearlephant", "incorrect", "magic", "console", "javascript", "five"];
  var rand = Math.floor(Math.random() * wordList.length);
  var mysteryWord = wordList[5].split(""); // computer picking a word
  var allGuess = [];
  var score;
  // var userGuess
  // var correctGuess = [];
  // var lives = mysteryWord.length + 3;


  // ### SETTING DISPLAY ###
  // #######################

  // document.getElementById("livesDisplay").innerHTML = lives;
  $("#noLettersDisp").html("This word has " + mysteryWord.length + " letters.");
  $("#correct").hide();
  $("#mysteryWordDisplay").hide();
  // $("#mysteryWordDisplay").html(mysteryWord.join(""));
  $("#mysteryWordDisplay").html(placeHolder);


  // ### FUNCTIONS AND VARIABLES NEEDED FOR GAMEPLAY ###
  // ###################################################

  var placeHolder = [];
  for (i = 0; i < mysteryWord.length; i++) {
    placeHolder.push("_")
  }


  function checker(userGuess) {  // checks to see if userGuess is same as a letter in the mysterword (placeHolder[i]); if it's correct placeHoler ("_") will be replaced by userGuess (key)
    for (i = 0; i < placeHolder.length; i++) {
      if (userGuess === mysteryWord[i]) {
        placeHolder[i] = userGuess;
      } else {
        // lives = lives - 1;
      }
    }
  }

  function correctGuesses(userGuess) {  // updates the html
    $("#correctGuesses").html(placeHolder)
  }

  function allGuesses(userGuess) {
    $("#allGuess").html(allGuess)
  }



  function countDown() {
    var timer = setTimeout(function () { alert("times up!"); gameStatus = false; console.log("countDown triggered gameStatus: " + gameStatus); gameOver(); }, 15000);
    timer;
    console.log("Timer Started! gameStatus: " + gameStatus);


  }

 



  function gameOver() {
    if (gameStatus == false) {
      var tryAgain = confirm("Try Again?")
      if (tryAgain) {
        location.reload();
      } else {
        console.log("## USER ENDED GAME ##");
      }
    }
  }



  function startGame() {

    var start = confirm("START");
    if (start === false) {
      console.log("END GAME")
      gameStatus = false;
      console.log("startGame triggered gameStatus of: " + gameStatus);
      gameOver();
    } else {
      round();
    }
  }



  function nextRound() {
    scoreKeep();
    alert("you completed 1 round");
    var next_round = confirm("READY?");
    if (next_round) {
      round();
    } else {
      gameOver();
    }

  }


  function round() {

     
    console.log("mystery word is: " + mysteryWord);             // testing purpose
    var timer = setTimeout(function () { alert("times up!"); gameStatus = false; console.log("countDown triggered gameStatus: " + gameStatus); gameOver(); }, 3000);
    timer;                                                      // starts timer
    console.log("Timer Started! gameStatus: " + gameStatus);    // testing purpose
    // countDown();
    $(document).on("keyup", function (event) {                  // when user presses a button...
      var userGuess = event.key;                                // userGuess is what the button the user pressed
      allGuess.push(userGuess);                                 // send to allGuesses array      
      checker(userGuess);                                       // checks to see if correct
      var guess1 = placeHolder.join("");                        //converts array back to string
      var word1 = mysteryWord.join("");                         // converts array back to srtring
      correctGuesses();                                         // updates html #correctGuesses
      console.log("userGuess is: [ " + userGuess + " ]");       // for logging purposes
      console.log("placeHolder is: " + placeHolder);            // for testing purposes
      console.log("current guess: " + guess1 + " " + word1)     // for testing purpose 
      if (guess1 === word1) {
        $("#correct").show();
        $("#mysteryWordDisplay").show();
        console.log("GAME END");
        score = score + 10;
        console.log(score);
        scoreKeep();
        // console.log("Player name is: " + player + ". Current Score: " + score)
        clearTimeout(timer);
        round();
      }
      correctGuesses();
      allGuesses();
    })
  }

  function playerInfo() {
    var player = prompt("Enter Name");
    var score = 0;
    if (player === false) {
      gameOver();
    }
  }

  function scoreKeep() {
    $("#scoreDisp").html(score);
    console.log(score);
  }

  // ### START OF GAME ###
  // #####################

  playerInfo();
  startGame();

});








// #####################################
// ########### NOTES ###################






  // $(document).on("keyup", function (event) {
  //   var userGuess = event.key;
  //   allGuess.push(userGuess);
  //   correctGuesses();
  //   console.log("userGuess is: [ " + userGuess + " ]");
  //   console.log(placeHolder);
  //   checker(userGuess);
  //   $("#correctGuesses").html = placeHolder;
  //   var guess1 = placeHolder.join("");
  //   var word1 = mysteryWord.join("");
  //   if (guess1 == word1) {
  //     $("#correct").show();
  //     $("#mysteryWordDisplay").show();
  //     console.log("GAME END");
  //   }
  //   correctGuesses();
  //   allGuesses();
  // })