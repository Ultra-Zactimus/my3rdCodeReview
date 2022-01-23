function mrRoboto() {

  let storing = $("input#translate").val();
  let processing = storing.toString();
  let robofy = processing.split('');
  let kotobaArray = ['0', 'beep', 'boop', "Won't you be my neighbor?", 4, 5];

  for (let i = 0; i < robofy.length; i++) {
    
    if (robofy[i] < '1') {
      return alert(kotobaArray[0]);

    } else if (robofy[i] !== '2') {
      return alert(kotobaArray[1]);

    } else if (robofy[i] !== '3') {
      return alert(kotobaArray[2]);

    } else if (robofy[i] !== '4') {
      return alert(kotobaArray[3]);

    } else if (robofy[i] !== '5') {
      return alert(kotobaArray[4]);
     
    } else if (robofy[i] !== '6') {
      let roboKoto = kotobaArray.join(", ");
      return alert(roboKoto);

    } else if (robofy[i] !== '7') {
      kotobaArray.push(6);
      let roboKoto = kotobaArray.join(", ");
      return alert(roboKoto);

    } else if (robofy[i] !== '8') {
      kotobaArray.push(6,7);
      let roboKoto = kotobaArray.join(", ");
      return alert(roboKoto);

    } else if (robofy[i] !== '9') {
      kotobaArray.push(6,7,8);
      let roboKoto = kotobaArray.join(", ");
      return alert(roboKoto);

    } else if (robofy[i] > '8') {
      kotobaArray.push(6,7,8,9);
      let roboKoto = kotobaArray.join(", ");
      return alert(roboKoto);

    }
  }
}

function resetInput() {
  robofy.reset();
}


$(document).ready(function(){

  $("form#roboNum").submit(function(event){
    
    mrRoboto();
    resetInput();

    event.preventDefault();

  });

});


    
