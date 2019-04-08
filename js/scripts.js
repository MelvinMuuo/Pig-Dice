var total1 = 0;
var total2 = 0;
var turnNumber1 = 0;
var turnNumber2 = 0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
function equals() {
  turnNumber1 = getRandomIntInclusive(1,6);
  return turnNumber1;
}
function addition1() {
  return total1 = total1 + turnNumber1;
}
function equals2() {
  turnNumber2 = getRandomIntInclusive(1,6);
  return turnNumber2;
}
function addition2() {
  return total2 = total2 + turnNumber2;
}

$(document).ready(function() {
  $("#button1").click(function() {
    $("#output").text(equals());
    $("#output1b").text(addition1());
  })
  $("#button2").click(function() {
    $("#output2").text(equals2());
    $("#output2b").text(addition2());
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
