

      var computerChoices = ["r", "p", "s"];
      var wins = 0;
      var losses = 0;
      var ties = 0;

  // When the user presses a key, it will run the following function...
  document.onkeyup = function(event) {

      var userGuessK = event.key;
      console.log(userGuessK);
      var userGuess = userGuessK.toLowerCase();


        // Sets the computerGuess variable equal to a random choice from the computerChoice array.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      //choices = "<p> Your choice : " + userGuess + "        Computer's choice : " + computerGuess;
      document.getElementById("#choiceU").innerHTML = userGuess;
      document.getElementById("#choiceC").innerHTML = computerGuess;

        // If the user presses "r" or "p" or "s", run the uwin logic.
        if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

          // This logic determines the outcome of the uwin (win/loss/tie), and increments the appropriate counter.
          if ((userGuess === "r") && (computerGuess === "s")) {
            document.getElementById("#result").innerHTML = " You Win";            
            wins++;
          }
          else if ((userGuess === "r") && (computerGuess === "p")) {
            document.getElementById("#result").innerHTML ="You Lost";
            losses++;
          }
          else if ((userGuess === "s") && (computerGuess === "r")) {
            document.getElementById("#result").innerHTML ="You Lost";
            losses++;
          }
          else if ((userGuess === "s") && (computerGuess === "p")) {
            document.getElementById("#result").innerHTML ="You Wins";
            wins++;
          }
          else if ((userGuess === "p") && (computerGuess === "r")) {
            document.getElementById("#result").innerHTML ="You Wins";
            wins++;
          }
          else if ((userGuess === "p") && (computerGuess === "s")) {
            document.getElementById("#result").innerHTML ="You Lost";
            losses++;
          }
          else if (userGuess === computerGuess) {
            document.getElementById("#result").innerHTML ="It's a Tie";
            ties++;
          }
          // Wins
          var winhtml = "<p>Wins " + wins + "</p>" +
          "<p>Ties: " + ties + "</p>";
          document.querySelector("#uwin").innerHTML = winhtml;

          //Loses
          var losshtml="<p>Wins " + losses +  "<p>Ties: " + ties + "</p>";
          document.querySelector("#uloss").innerHTML = losshtml;
        }
      else {
        alert("Wrong Entry - Try pressing r, p or s")
      }
      };

