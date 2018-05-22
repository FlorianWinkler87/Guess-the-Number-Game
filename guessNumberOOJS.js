let output = document.getElementById("textOutput");
let prevNumbers = document.getElementById("prevNumbers");
let userInput = document.getElementById("input");
let submit = document.getElementById("submit");

function Game (min, max, maxTries){
  this.min = min;
  this.max = max;
  this.maxTries = maxTries;
  this.tries = tries = 0;
  this.random = random(this.min,this.max);

}

Game.prototype.guessNumber = function () {
  Input = parseInt(userInput.value);
  if ( Input == this.random ) {
    prevNumbers.insertAdjacentHTML("beforeend", Input + "   ");
    output.innerHTML = "You found the number.";
    level.gameOver();
  } else if ( Input < this.random ) {
    prevNumbers.insertAdjacentHTML("beforeend", Input + "   ");
    output.innerHTML = "Your number is too low";
    this.tries++;
    console.log(this.tries);
  } else if ( Input > this.random ) {
    prevNumbers.insertAdjacentHTML("beforeend", Input + "   ");
    output.innerHTML = "Your number is too high.";
    this.tries++;
    console.log(this.tries);
  } else {
    prevNumbers.insertAdjacentHTML("beforeend", " -- ");
    output.innerHTML = "Not a number.";
    this.tries++;
    console.log(this.tries);
  }
  console.log(this.random);
  if ( this.tries == this.maxTries) {
    level.gameOver();
  }
}
Game.prototype.gameOver = function(){
  userInput.disabled = true;
  submit.disabled = true;
}

Game.prototype.newGame = function () {
  this.tries = 0;
  this.random = random(this.min,this.max);
  userInput.disabled = false;
  userInput.value = "";
  submit.disabled = false;
  output.innerHTML = "";
  prevNumbers.innerHTML = "";
}

function random(min, max) {
  return Math.floor(Math.random() * (max) + min);
}

let game1 = new Game (1,50,10);
let game2 = new Game (1,100,8);
let game3 = new Game (1,5,2)


let level =  game1;
function selectLevel() {
  let tempLevel = document.getElementById("select").value;
  if (tempLevel == "Level 1") {
    level = game1;
  } else if (tempLevel == "Level 2") {
    level = game2;
  } else if(tempLevel == "Level 3"){
    level = game3;
  } else {}
  level.newGame();
}
