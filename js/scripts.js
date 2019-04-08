var player1, player2;
var result1 = 0;
var turnresult = 0;

function player(name, totalscore){
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
player.prototype.Endgame = function () {
  if (this.totalscore >= 100){

    $("#output").append("<p id='game-over'>GAME OVER! " + this.name + " won!");
  }
}

$(document).ready(function(){
  $("#button1").click(function() {
    $("#output").text(this.totalscore);
  })

  $("#button2").click(function() {
    $("#output").text(this.totalscore);
  })
  $("#hold1").click(function() {
    $("#button1").attr("disabled",true);
    $("#button2").attr("disabled",false);
  })
  $("#hold2").click(function() {
    $("#button1").attr("disabled",false);
    $("#button2").attr("disabled",true);
})

})
