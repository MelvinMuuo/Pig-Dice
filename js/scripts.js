var total1 = 0;
var total2 = 0;

function addition1() {
  return total1 += getRandomIntInclusive(1,6);
}
function addition2() {
  return total2 += getRandomIntInclusive(1,6);
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

$(document).ready(function() {
  $("#button1").click(function() {
    $("#button1").attr("disabled",true);
    $("#button2").attr("disabled",false);
    alert(addition1());

  })
  $("#button2").click(function() {
    $("#button1").attr("disabled",false);
    $("#button2").attr("disabled",true);
    alert(addition2());
  })
})
