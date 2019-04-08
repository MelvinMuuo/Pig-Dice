var total1 = 0;
var total2 = 0;
var turnNumber1 = 0;
var turnNumber2 = 0;
var turnTotal = 0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
function addition1() {
  return turnNumber += getRandomIntInclusive(1,6);
}
function addition2() {
  return turnTotal += getRandomIntInclusive(1,6);
}


$(document).ready(function() {
  $("#button1").click(function() {
    $("#output").text(addition1());
  })
  $("#button2").click(function() {
    $("#output2").text(addition2());
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
