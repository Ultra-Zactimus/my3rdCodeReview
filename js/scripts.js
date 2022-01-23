function mrRoboto() {

  let storing = [$("input#translate").val()];
  let converting = storing.toString();
  let processing = converting.split("");
  const robofying = processing.map((i) => Number(i));
  let kotobaArray = ['0', 'beep', 'boop', "Won't you be my neighbor?", 4, 5];
    
    if (Math.max(robofying.length) === 0) {
      return alert(kotobaArray[0]);
    
    } else if (Math.max(robofying.length) === 1){
      return alert(kotobaArray[1]);
    
    } else if (Math.max(robofying.length) === 2) {
      return alert(kotobaArray[2]);

    } else if (Math.max(robofying.length) === 3) {
      return alert(kotobaArray[3]);

    } else if (Math.max(robofying.length) === 4) {
      return alert(kotobaArray[4]);
     
    } else if (Math.max(robofying.length) === 5) {
      let roboKoto = kotobaArray.join(", ");
      return alert(roboKoto);

    } else if (Math.max(robofying.length) === 6) {
      kotobaArray.push(6);
      let roboKoto = kotobaArray.join(", ");
      return alert(roboKoto);

    } else if (Math.max(robofying.length) === 7) {
      kotobaArray.push(6,7);
      let roboKoto = kotobaArray.join(", ");
      return alert(roboKoto);

    } else if (Math.max(robofying.length) === 8) {
      kotobaArray.push(6,7,8);
      let roboKoto = kotobaArray.join(", ");
      return alert(roboKoto);

    } else if (Math.max(robofying.length) === 9) {
      kotobaArray.push(6,7,8,9);
      let roboKoto = kotobaArray.join(", ");
      return alert(roboKoto);

    } else {
      return alert("Mr. Robogers: \"You have entered an invalid Input! BEEP! BOOP!\nONLY UNDERSTAND NUMBERS!\n TrY aGa1n N3iGhBoR! \"");
  }
}

function resetInput() {
  robofying.reset();
}


$(document).ready(function(){

  $("form#roboNum").submit(function(event){
    
    mrRoboto();
    resetInput();

    event.preventDefault();

  });

});


    
