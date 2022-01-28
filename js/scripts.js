function mrRoboto() {

  let input = $("input#translate").val().split('');

  length = input.length;

  let robofying = [];

  for (i = 0; i < length; i++) {
    robofying.push(parseInt(input[i]));

    if (Math.max(...robofying) === 0) {
      $("#roboger").html("<h2 id='roboger'>Mr. Roboger: \"0\" </h2>");

    } else if (Math.max(...robofying) === 1) {
      $("#roboger").html("<h2 id='roboger'>Mr. Roboger: \"beep\" </h2>");

    } else if (Math.max(...robofying) === 2) {
      $("#roboger").html("<h2 id='roboger'>Mr. Roboger: \"boop\" </h2>");

    } else if (Math.max(...robofying) === 3) {
      $("#roboger").html("<h2 id='roboger'>Mr. Roboger: \"Won't you be my Neighbor?\" </h2>");

    } else if (Math.max(...robofying) === 4) {
      $("#roboger").html("<h2 id='roboger'>Mr. Roboger: 4 </h2>");

    } else if (Math.max(...robofying) === 5) {
      $("#roboger").html("<h2 id='roboger'>Mr. Roboger: \"0\", \"beep\", \"boop\", \"Won't you be my Neighbor?\", 4, 5 </h2>");

    } else if (Math.max(...robofying) === 6) {
      $("#roboger").html("<h2 id='roboger'>Mr. Roboger: \"0\", \"beep\", \"boop\", \"Won't you be my Neighbor?\", 4, 5, 6 </h2>");

    } else if (Math.max(...robofying) === 7) {
      $("#roboger").html("<h2 id='roboger'>Mr. Roboger: \"0\", \"beep\", \"boop\", \"Won't you be my Neighbor?\", 4, 5, 6, 7 </h2>");

    } else if (Math.max(...robofying) === 8) {
      $("#roboger").html("<h2 id='roboger'>Mr. Roboger: \"0\", \"beep\", \"boop\", \"Won't you be my Neighbor?\", 4, 5, 6, 7, 8 </h2>");

    } else if (Math.max(...robofying) === 9) {
      $("#roboger").html("<h2 id='roboger'>Mr. Roboger: \"0\", \"beep\", \"boop\", \"Won't you be my Neighbor?\", 4, 5, 6, 7, 8, 9 </h2>");

    } else {
      return alert("Mr. Robogers: \"You have entered an invalid Input! BEEP! BOOP!\nONLY UNDERSTAND NUMBERS!\n TrY aGa1n N3iGhBoR! \"");
    }
  }
}

$(document).ready(function() {

  $("#getResults").click(function(event) {

    mrRoboto();

    event.preventDefault();

  });

});