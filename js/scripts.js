function mrRoboto() {
  let storing = $("input#translate").val();
  let converting = storing.toString().split('');
  let kotobaArray = ['0', 'beep', 'boop', "Won't you be my neighbor?", 4, 5];

  for (let i = 0; i < converting.length; i++) {
    let robofying = converting[i];

    if (robofying.includes('0')) {
      $("#robo0").show();
    
    } else if (robofying.includes('1')) {
      $("#robo1").show();
    
    } else if (robofying.includes('2')) {
      $("#robo2").show();
    
    } else if (robofying.includes('3')) {
      $("#robo3").show();
    
    } else if (robofying.includes('4')) {
      $("#robo4").show();
  
    } else if (robofying.includes('5')) {
      $("#robo5").show();
  
    } else if (robofying.includes('6')) {
      $("#robo6").show();
    
    } else if (robofying.includes('7')) {
      $("#robo7").show();
    
    } else if (robofying.includes('8')) {
      $("#robo8").show();
    
    } else if (robofying.includes('9')) {
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

});
