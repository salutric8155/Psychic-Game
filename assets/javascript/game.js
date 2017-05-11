var wins= 0;
var losses= 0;
var guessesLeft= 10;
var yourGuessesSoFar= " ";
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var computerChoices= alphabet;
var userGuessArray = [];

 document.onkeyup = function(event) {

          var userGuess = event.key;
          userGuessArray.push(userGuess);

          var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

          

          if (userGuess === computerGuess){
          	wins++;
          	guessesLeft= 10;
          	userGuessArray = [];

          }

          if (userGuess !== computerGuess){
          	guessesLeft--;
          }

          if (guessesLeft <= 0){
          		losses++;
          		guessesLeft= 10;
          		userGuessArray = [];
          }
          


          var html = "<h1>The Psychic Game</h1>" +
          "<p>Guess what letter I'm thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + userGuessArray.join(", ") + "</p>";

          document.querySelector("#game").innerHTML = html;        
      };