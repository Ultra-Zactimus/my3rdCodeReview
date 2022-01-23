function mrRoboto() {

  let processing = $("input#translate").val();
  let kotobaArray = ['0', 'beep', 'boop', "Won't you be my neighbor?"];
  for (let i = 0; i < processing.length; i++) {
    
    if (processing[i].length === 1) {
      return alert(kotobaArray[1]);

    } else if (processing[i].length === 2) {
      return alert(kotobaArray[2]);

    } else if (processing[i].length === 3) {
      return alert(kotobaArray[3]);

    } else if (processing[i].length === 4) {
      kotobaArray.push(4);
      return alert(kotobaArray[4]);
     
    } else if (processing[i].length === 5) {
      kotobaArray.push(4,5);
      let roboOboete = kotobaArray.join(", ");
      return alert(roboOboete[5]);

    } else if (processing[i].length === 6) {
      kotobaArray.push(4, 5, 6);
      let roboOboete = kotobaArray.join(", ");
      return alert(roboOboete[6]);

    } else if (processing[i].length === 7) {
      kotobaArray.push(4, 5, 6, 7);
      let roboOboete = kotobaArray.join(", ");
      return alert(roboOboete[7]);

    } else if (processing[i].length === 8) {
      kotobaArray.push(4, 5, 6, 7, 8);
      let roboOboete = kotobaArray.join(", ");
      return alert(roboOboete[8]);

    } else if (processing[i].length === 9) {
      kotobaArray.push(4, 5, 6, 7, 8, 9);
      let roboOboete = kotobaArray.join(", ");
      return alert(roboOboete[9]);

      
    }
  }
}




$(document).ready(function(){

  $("form#roboNum").submit(function(event){
    
    mrRoboto();

    event.preventDefault();
  });

});


    
