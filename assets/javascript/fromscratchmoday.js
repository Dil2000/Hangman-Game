
    //When loadin the game
    window.onload = function () {
      console.log("loading")
      var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-
  
  }

      //When press the start button 
    function startgame(){
      var underscore ="";
      var counter = 0;
      var lives = 10;

        console.log("star game clicked")
        categories = ["storrs", "sydney", "colombo", "montreal", "toronto","boston", "stamford", "seattle", "rome", "paris"];

      //pick a word from the list.
      word = categories[Math.floor(Math.random() * categories.length)];
      console.log(word);
      //word = word.replace(/\s/g, "-");

      // creating the list of blanks for the letter

      for (var i = 0; i < word.length; i++) {
        var underscore = underscore + "_";
      }

      console.log("blanks " + underscore);     
      document.getElementById("hold").innerHTML = underscore ;

    }
  
     //check for the matching letters and replace
  check = function(a){
    var x = [];
    var x = document.getElementById("hold").innerHTML;
    console.log(x);
    console.log("word a " + word[a]);        
        
        for(var j = 0; j < x.length; j++){
          if (a === j){
            x[j] = x.replace(x[j],guess);
            document.getElementById("hold").innerHTML = x;
            console.log(x);
            counter++;
          }
          else{
            x = x;
          }
        }       
  }

  //print letters to the screen  
  result = function () {
    var lives ;
    for (var i = 0; i < word.length; i++) {
      if (word[i] === guess) {
        check(i);
      } else {
        //guess.innerHTML = "_";
        lives--;
        console.log("lives left " + lives);
      }
    }
  }

    // When the user presses a key, it will run the following function...
  document.onkeyup = function(event) {

      var userGuessK = event.key;
      console.log(userGuessK);
      guess = userGuessK.toLowerCase();
      console.log("typed letter" + guess);

      //replaceBlank();
      //output();
      result();
      //check();
      //comments();
  }

      
// check for right letters & mark the no of letters used
   /*check = function () {
    //list.onclick = function () {
      var geuss = (this.innerHTML);

      //this.setAttribute("class", "active");
      //this.onclick = null;
      var usedLet = 0;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          //counter += 1;
        } 
        else{
          usedLet++;
        }
      }
      /* N */
      /*
      if (word.length === usedLet){
        console.log("word used " + word);
        console.log("used letters " + usedLet);
        var mydiv = document.getElementById("usedLe");
        console.log("what is " + geuss);
        mydiv.innerHTML += (" " + geuss);
      }

      /***/ /*
      var j = (word.indexOf(geuss));
      console.log("index of word value is " + word.indexOf(geuss));
      console.log("guess value is " + guess);
      if (j === -1) {
        // temporary fix
        lives = 9; // find and change this line
        comments();
        animate();
      } else {
        comments();
      }
  }
*/

  //End of the game - counting lives
/*
  comments = function () {
    //var showLives = document.getElementById("mylives");
    //showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
      $("div#img").css("display","inline");
    }
    for (var i = 0; i < word.length; i++) {
      //if (counter + space === word.length) {
        console.log("counter is " + counter);
        if (word.length === (counter * 2)) {
        showLives.innerHTML = "You Win!";
        $("div#img2").css("display","inline");
        }
    }
  }
*/


  

