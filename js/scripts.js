var player1, player2;
var result1 = 0;
var turnresult = 0;

fuction player(name, totalscore){
  this.name = name;
  this.totalscore = total;
}

function output () {
  result1 = Math.floor(Math.random() * 6) + 1;
  return turnresult += result1;
}
player.prototype.addition = function () {
  this.totalscore += turnresult;
  return this.totalscore;
}
function beginning (){
  player1.totalscore = 0;
  player2.totalscore = 0;
}

$(document).ready(function)(){
  beginning();

  $("#button1").click(function() {
    $("#output").text(addition());

  }
}
