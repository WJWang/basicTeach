var rockPaperScissor = function(userInput) {
  var computerOptions = ['paper', 'rock', 'scissor'];
  var computerRandomNumber = Math.round( (Math.random()*100)%3);
  var computerResult = computerOptions[computerRandomNumber];

  if (userInput === 'rock') {
    // user is rock
    if (computerResult === 'rock') {
      console.log("DRAW!!");
    } else if (computerResult === 'paper'){
      console.log("YOU LOSE!!");
    } else {
      console.log("YOU WIN!!");
    }
  } else if (userInput === 'paper') {
    // user is paper
    if (computerResult === 'rock') {
      console.log("YOU WIN!!");
    } else if (computerResult === 'paper'){
      console.log("DRAW!!");
    } else {
      console.log("YOU LOSE!!");
    }
  } else {
    // user is scissor
    if (computerResult === 'rock') {
      console.log("YOU LOSE!!");
    } else if (computerResult === 'paper'){
      console.log("YOU WIN!!");
    } else {
      console.log("DRAW!!");
    }
  }
};

module.exports = rockPaperScissor;
