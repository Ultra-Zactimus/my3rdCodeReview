function mrRoboto(translator) {

  translator = parseInt(translator);
  let roboKotoba = [];

  for (let index = 0; index <= translator; index++) {

    let robofying = index.toString();

    if (robofying.includes('3')) {
      roboKotoba.push("Won't you be my neighbor?");

    } else if (robofying.includes('2')) {
      roboKotoba.push("Boop");

    } else if (robofying.includes('1')) {
      roboKotoba.push("Beep");

    } else {
      roboKotoba.push(robofying);
    }
  } return roboKotoba;
}

$(document).ready(function() {
  $("#getResults").click(function(event) {
    event.preventDefault();

    let neighborInput = $("input#translate").val();
    let recieving = mrRoboto(neighborInput);
    const roboLingo = recieving.join(", ");

    $("#roboger").html("<h2 id='roboger'>Mr. Roboger: " + roboLingo + "</h2>");
  });
});