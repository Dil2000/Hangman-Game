window.onload = function () {
  $("button#new").css("visibility","hidden");
}

function startgame(){

  $("button#startG").css("visibility","hidden");
  $("button#new").css("visibility","visible");

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  var word ;              // Selected word
  var guess ;             // Guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'
  var wins;               // Number of total wins
  var losses;             // Number of total loses


  // Get elements
  var showLives = document.getElementById("mylives");

  // create alphabet ul
    var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
  
  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show Win or Lose
   comments = function () {
    var losses = document.getElementById("#choiceL").innerHTML;
    var wins = document.getElementById("#choiceW").innerHTML;
    var vid = document.getElementById("myAudio"); 

    showLives.innerHTML = "You have " + lives + " lives";
    // Loses
    if (lives < 1) {
      showLives.innerHTML = "Game Over ! City was - " + word;
      $("div#img").css("display","inline");
      losses++;
      document.getElementById("#choiceL").innerHTML = losses;
      $("div#buttons").css("display","none");
    }
    // Wins
    if (counter + space === guesses.length) {
      showLives.innerHTML = "You Win!";
      $("div#img2").css("display","inline");                 
      $("div#buttons").css("display","none");
      vid.play(); 
      wins++;
      document.getElementById("#choiceW").innerHTML = wins;
    }
  }



  // Animate man
  var animate = function () {
    //Later -Check for no of lives and if less than 10 then do an if statement to draw rest of the parts automatically.
    var drawMe = lives ;
    drawArray[drawMe]();
  }
  
   // Hangman
  canvas =  function(){
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  }
  
  head = function(){
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
  }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
  }

   frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


  // OnClick the keys Function
  check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);

      this.setAttribute("class", "active");
      this.onclick = null;

      var usedLet = 0;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          guesses[i].innerHTML = geuss;
          counter += 1;
        } 
        else{
          usedLet++;
        }
      }
      /* N */
      if (word.length === usedLet){
        var mydiv = document.getElementById("usedLe");
        mydiv.innerHTML += (" " + geuss);
      }
      /***/
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
  
    
  // Basic fucntion to start the game
  play = function () {
    categories = [
        ["cairo", "sydney", "colombo", "montreal", "toronto"],
        ["boston", "stamford", "seattle", "rome", "paris"],
        ["manchester", "milan", "madrid", "amsterdam", "kandy"]
    ];

    var chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    canvas();
  }

  play();

}

  // Reset the window for another word
  function reset(){
    var vid = document.getElementById("myAudio"); 
    $("div#buttons").css("display","inline");
    $("div#img").css("display","none");
    $("div#img2").css("display","none");
    $("div#buttons").empty();
    $("h5#hold").empty();
    $("div#usedLe").empty();
    context.closePath();
    console.log("clear");
    context.clearRect(0,0,200,200);
    var lives = 10; 
    vid.pause();
    play();
  } 
 