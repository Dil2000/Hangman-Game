    
    var letters = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var wins = 0;
    var losses = 0;


  // When the user presses a key, it will run the following function...
  document.onkeyup = function(event) {

      var userGuessK = event.key;
      console.log(userGuessK);
      var userGuess = userGuessK.toLowerCase();
