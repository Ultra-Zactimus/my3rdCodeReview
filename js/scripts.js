function mrRoboto() {

  let storing = $("input#translate").val();
  let converting = storing.toString().split('');
  let robofying = converting.map(Number);
  console.log(robofying);
  console.log(typeof(robofying));
  let num1 = robofying[0];
  let num2 = robofying[1];

  let kotobaArray = ['0', 'beep', 'boop', "Won't you be my neighbor?", 4, 5];

    if (num2 === NaN) {
    //  I cry T_T I almost solved this!

    } else if (Math.max(num1 , num2) === 0 && Math.max(num1 , num2) < 1) {
      $("#roboNum").hide();
      $("#robo0").show();
      $("clickHide").show("#roboNum");
    
    } else if (Math.max(num1 , num2) > 0 && Math.max(num1 , num2) < 2) {
      $("#roboNum").hide();
      $("#robo1").show();
    
    } else if (Math.max(num1 , num2) > 1 && Math.max(num1 , num2) < 3) {
      $("#roboNum").hide();
      $("#robo2").show();
    
    } else if (Math.max(num1 , num2) > 2 && Math.max(num1 , num2) < 4) {
      $("#roboNum").hide();
      $("#robo3").show();
    
    } else if (Math.max(num1 , num2) > 3 && Math.max(num1 , num2) < 5) {
      $("#roboNum").hide();
      $("#robo4").show();
  
    } else if (Math.max(num1 , num2) > 4 && Math.max(num1 , num2) < 6) {
      $("#roboNum").hide();
      $("#robo5").show();
  
    } else if (Math.max(num1 , num2) > 5 && Math.max(num1 , num2) < 7) {
      $("#roboNum").hide();
      $("#robo6").show();
    
    } else if (Math.max(num1 , num2) > 6 && Math.max(num1 , num2) < 8) {
      $("#roboNum").hide();
      $("#robo7").show();
    
    } else if (Math.max(num1 , num2) > 7 && Math.max(num1 , num2) < 9) {
      $("#roboNum").hide();
      $("#robo8").show();
    
    } else if (Math.max(num1 , num2) > 8 || Math.max(num1) > 8) {
      $("#roboNum").hide();
      $("#robo9").show();
    
    } else {
      return alert("Mr. Robogers: \"You have entered an invalid Input! BEEP! BOOP!\nONLY UNDERSTAND NUMBERS!\n TrY aGa1n N3iGhBoR! \"");
      
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
