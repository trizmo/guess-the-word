$("#correct").hide();



$(document).ready(function () {

  // ### FUNCTIONS AND VARIABLES NEEDED FOR GAMEPLAY ###
  // ###################################################

  console.log("GAME START")
  var gameStatus = true; // Indicates if game is in play or not
  var playerName = "";
  var allGuess = [];
  var score = 0;
  var roundCounter = 1;
  var lives = 3;
  var roundWin = false;
 



  var highscore = 0;

  // localStorage.setItem(highscore, 0);


  // timer settings
  // else if (timer === 0) {
  //   console.log("Time Is up!!")
  //   gameOver();
  //   }


  var timer = 11;
  

  function countDown() {
    timer--;
    if (timer > 0) {
      setTimeout(countDown, 1000);
    } 
    $("#timeDisplay").html(timer);
    console.log(timer);
  }



  function playerInfo() {
    if (playerName = prompt("Enter Name")) {
      $("#playerName").html(playerName);
    } else {
      gameOver();
    }
  }

  function scoreKeep() {
    console.log("scoreKeep is: " + score);
  }


  function gameOver() {
    if (gameStatus === false) {
      if (confirm("GAME OVER... Try Again?")) {
        startGame();
      } else {
        // location.assign("thankyou.html");
        console.log("## USER ENDED GAME ##");
      }
    }
  }


  function startGame() {
    lives = 3;
    score = 0;
    if (confirm("START")) {
      round();
    } else {
      console.log("END GAME")
      gameStatus = false;
      console.log("startGame triggered gameStatus of: " + gameStatus);
      gameOver();
    }
  }


  function nextRound() {
    score = score + 10;
    // score = score + 10 + timer;
    // console.log(timer)
    console.log("Player name is: " + playerName + ". Current Score: " + score)
    $("#playerScore").html(score);
    $("#scoreDisp").html(score);
    $("#roundDisp").html(roundCounter)
    console.log("CURRENT ROUND: " + roundCounter);
    scoreKeep();
    // setTimeout(function () {      // to keep the modal from executing before everything else
      if (confirm("READY?")) {
        round();
      } else {
        gameStatus = false
        gameOver();
      }
    // }, 500)
  }


  function round() {  // start of each round
    // reset at start of round
    var userGuess;
    roundWin = false;
    allGuess = [];
    placeHolder = [];
    $("#correctGuesses").html(placeHolder);
    $("#allGuess").html(allGuess);
    $("#correct").html("");

    // computer picking a word
    var wordList = ["bearlephant", "incorrect", "magic", "console", "javascript", "five"];
    var rand = Math.floor(Math.random() * wordList.length);
    mysteryWord = wordList[rand].split("");
    $("#noLettersDisp").html("This word has " + mysteryWord.length + " letters.");
    
    for (i = 0; i < mysteryWord.length; i++) {
      placeHolder.push("_")
    }
    console.log("mystery word is: " + mysteryWord);
    $("#mysteryWordDisplay").show();
    $("#mysteryWordDisplay").html(mysteryWord.join(""));



    // TIMER STARTS HERE
    setTimeout(countDown, 0)
    console.log("Timer TESTING! gameStatus: " + gameStatus);    // testing purpose




    // user guessing functionality
    $(document).on("keyup", function (event) {
      userGuess = event.key;

      // checking to see if correct or wrong
      if (mysteryWord.includes(userGuess) || allGuess.includes(userGuess)) {
      } else {
        allGuess.push(userGuess);
        $("#allGuess").html(allGuess)
      }


      for (i = 0; i < placeHolder.length; i++) {
        if (userGuess === mysteryWord[i]) {
          placeHolder[i] = userGuess;
        }
      }


      guess1 = placeHolder.join("");
      word1 = mysteryWord.join("");
      console.log("userGuess is: [ " + userGuess + " ]");
      console.log("placeHolder is: " + placeHolder);
      console.log("current guess: " + guess1 + " " + word1)
      $("#correctGuesses").html(placeHolder);


      if (guess1 === word1) {
        console.log("guess1: " + guess1 + " word1: " + word1)
        roundWin = true;

        clearTimeout(countDown);
        console.log("Timer TESTING! gameStatus: " + gameStatus);    // testing purpose
        console.log("clearTimeout: " + clearTimeout(countDown));
        
        $("#correct").html("You Guessed Right!");
        $("#mysteryWordDisplay").show();
        console.log("END OF ROUND " + roundCounter);
        roundCounter++
        nextRound();

        
      }
    })
  }





  // ### START OF GAME ###
  // #####################

  playerInfo(playerName);
  startGame();

});








// #####################################
// ########### NOTES ###################





