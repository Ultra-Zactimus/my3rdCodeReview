function mrRoboto() {

  let processing = document.getElementById("translate").onsubmit();
  let kotobaArray = ['0', 'beep', 'boop', "Won't you be my neighbor?"];
  for (let i = 0; i < processing.length; i++) {
    
    if (processing[i].length === 1) {
      return alert(kotobaArray[1]);

    } if (processing[i].length === 2) {
      return kotobaArray[2];

    } if (processing[i].length === 3) {
      return kotobaArray[3];

    } if (processing[i].length === 4) {
      kotobaArray.push(4);
      return kotobaArray[4];
     
    } if (processing[i].length === 5) {
      kotobaArray.push(4,5);
      let roboOboete = kotobaArray.join(", ");
      return roboOboete;

    } if (processing[i].length === 6) {
      kotobaArray.push(4, 5, 6);
      let roboOboete = kotobaArray.join(", ");
      return roboOboete;

    } if (processing[i].length === 6) {
      kotobaArray.push(4, 5, 6);
      let roboOboete = kotobaArray.join(", ");
      return roboOboete;

    } if (processing[i].length === 7) {
      kotobaArray.push(4, 5, 6, 7);
      let roboOboete = kotobaArray.join(", ");
      return roboOboete;

      } if (processing[i].length === 8) {
      kotobaArray.push(4, 5, 6, 7, 8);
      let roboOboete = kotobaArray.join(", ");
      return roboOboete;

    } if (processing[i].length === 9) {
      kotobaArray.push(4, 5, 6, 7, 8, 9);
      let roboOboete = kotobaArray.join(", ");
      return roboOboete;

    }
  }
}



$(documment).ready(function(){

  $("form#roboNum").submit(function(event){
    event.preventDefault();


  });

});

    
