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

  var guess1;
  var word1;

  
//timer settings
  var timer = 11;
  setTimeout(countDown, 10000)

  function countDown() {
    timer--;
    if (timer > 0) {
      setTimeout(countDown, 1000);
    } else if (timer === 0) {
    console.log("Time Is up!!")
    }

    $("#timeDisplay").html(timer);
    console.log(timer);
  }



  function playerInfo() {
    playerName = prompt("Enter Name");
    $("#playerName").html(playerName);
    if (playerName === false) {
      gameOver();
    }
  }

  function scoreKeep() {
    console.log("scoreKeep is: " + score);
  }


  function gameOver() {
    if (gameStatus === false) {
      var tryAgain = confirm("GAME OVER... Try Again?")
      if (tryAgain) {
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

    score = score + 10 + timer;
    console.log("Player name is: " + playerName + ". Current Score: " + score)
    $("#playerScore").html(score);

    $("#scoreDisp").html(score);
    $("#roundDisp").html(roundCounter)
    console.log("ROUND: " + roundCounter);
    scoreKeep();


    setTimeout(function () {      // to keep the modal from executing before everything else
      if (confirm("READY?")) {
        round();
      } else {
        gameStatus = false
        gameOver();
      }
    }, 0.1)
  }


  function round() {  // start of each round
    roundWin = false;
    allGuess = [];
    placeHolder = "x";
    $("#correctGuesses").html(placeHolder);
    $("#allGuess").html(allGuess)
    $("#correct").html("");

    // computer picking a word
    var wordList = ["bearlephant", "incorrect", "magic", "console", "javascript", "five"];
    var rand = Math.floor(Math.random() * wordList.length);
    mysteryWord = wordList[5].split("");
    $("#noLettersDisp").html("This word has " + mysteryWord.length + " letters.");
    var placeHolder = [];
    for (i = 0; i < mysteryWord.length; i++) {
      placeHolder.push("_")
    }
    console.log("mystery word is: " + mysteryWord);
    $("#mysteryWordDisplay").show();
    $("#mysteryWordDisplay").html(mysteryWord.join(""));



    // TIMER STARTS HERE
    countDown()
    console.log("Timer TESTING! gameStatus: " + gameStatus);    // testing purpose
    



    // user guessing functionality
    $(document).on("keyup", function (event) {
      var userGuess = event.key;

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





