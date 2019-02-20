var randomNumber;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var guess = 0;
var wins = 0;
var losses = 0;
var uniqueNumbers;

function resetGame() {
  randomNumber = Math.floor(Math.random() * (+121 - +19)) + +19;
  $('#randomNumber').text(randomNumber);

  // console.log(randomNumber)

  guess = 0;
  $('#guess').html(guess);


  uniqueNumbers = [];
  while(uniqueNumbers.length < 4){
    var r = Math.floor(Math.random()*12) + 1;
    if(uniqueNumbers.indexOf(r) === -1) uniqueNumbers.push(r);
  }
  // console.log(uniqueNumbers);


  $('#wins').html(wins);
  $('#losses').html(losses);

  // $(".crystal").bind( "click");
};

resetGame();


$(".crystal").on("click", function () {
  idNum = $(this).attr('id')[$(this).attr('id').length-1];
  num = uniqueNumbers[idNum];
  console.log(num);


  guess += num;
  console.log(guess)

  $('#guess').html(guess);

  if(guess === randomNumber){
    // console.log("you win")
    $('#randomNumber').text("You win!");
    wins++;
    $('#wins').html(wins);
    // $(".crystal").unbind( "click");
  } else if(guess > randomNumber){
    // console.log("you lose")
    $('#randomNumber').text("You lose!");
    losses++
    $('#losses').html(losses);
    // $(".crystal").unbind( "click");
  }
});

$("#reset").on( "click", resetGame );

$('.crystal').animate({'left':(-10)+'px'},200)
.animate({'left':(+20)+'px'},200)
.animate({'left':(-10)+'px'},200);