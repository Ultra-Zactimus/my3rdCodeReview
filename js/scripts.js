function mrRoboto() {

  let storing = [$("input#translate").val()];
  let converting = storing.toString();
  let robofying = converting.split("");
  let kotobaArray = ['0', 'beep', 'boop', "Won't you be my neighbor?", 4, 5];

    for(let i = 0; i < robofying.length; i++) {

    if (robofying[i].includes(0)) {
      console.log(kotobaArray[0]);
      $("#roboNum").hide();
      $("#robo0").show();
      $("clickHide").show("#roboNum");
    
    } else if (robofying[i].includes(1)) {
      console.log(kotobaArray[1]);
      $("#roboNum").hide();
      $("#robo1").show();
    
    } else if (robofying[i].includes(2)) {
      console.log(kotobaArray[2]);
      $("#roboNum").hide();
      $("#robo2").show();
    

    } else if (robofying[i].includes(3)) {
      console.log(kotobaArray[3]);
      $("#roboNum").hide();
      $("#robo3").show();
    
    } else if (robofying[i].includes(4)) {
      console.log(kotobaArray[4]);
      $("#roboNum").hide();
      $("#robo4").show();
    
     
    } else if (robofying[i].includes(5)) {
      console.log(kotobaArray[5]);
      $("#roboNum").hide();
      $("#robo5").show();
    

    } else if (robofying[i].includes(6)) {
      console.log(kotobaArray[6]);
      $("#roboNum").hide();
      $("#robo6").show();
    

    } else if (robofying[i].includes(7)) {
      console.log(kotobaArray[7]);
      $("#roboNum").hide();
      $("#robo7").show();
    
    } else if (robofying[i].includes(8)) {
      console.log(kotobaArray[8]);
      $("#roboNum").hide();
      $("#robo8").show();
    

    } else if (robofying[i].includes(9)) {
      console.log(kotobaArray[9]);
      $("#roboNum").hide();
      $("#robo9").show();
    

    } else {
      return alert("Mr. Robogers: \"You have entered an invalid Input! BEEP! BOOP!\nONLY UNDERSTAND NUMBERS!\n TrY aGa1n N3iGhBoR! \"");
    
    }   
  }
}





$(document).ready(function() {

  $("form#roboNum").submit(function(event) {

    mrRoboto();

    event.preventDefault();

  });

  $(".clickHide").click(function() {
    $("#roboNum").toggle().show();
    $("#robo0").toggle().hide();
    $("#robo1").toggle().hide();
    $("#robo2").toggle().hide();
    $("#robo3").toggle().hide();
    $("#robo4").toggle().hide();
    $("#robo5").toggle().hide();
    $("#robo6").toggle().hide();
    $("#robo7").toggle().hide();
    $("#robo8").toggle().hide();
    $("#robo9").toggle().hide();
    document.getElementById('roboNum').reset();

  });

});
