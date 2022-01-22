function mrRoboto(input) {

  let inputArray = input;
  let kotobaArray = [];

  for (let index = 0; index < inputArray.length; index++) {
    let newArray = toString(inputArray[i]);
    console.log(newArray);

    if (newArray.includes(0)) {
      kotobaArray.push('0');
      return kotobaArray[0];

    } else if (newArray.includes(1)) {
      return kotobaArray[1];

    } else if (newArray.includes(2)) {
      return kotobaArray[2];

    } else if (newArray.includes(3)) {
      return kotobaArray[3];

    } else if (newArray.includes(4)) {
      kotobaArray.push(4)
      return kotobaArray[4];

    } else if (newArray.includes(5)) {
      kotobaArray.push(4, 5);
      let roboOboete = kotobaArray.join(", ");
      return roboOboete;

    } else if (newArray.includes(6)) {
      kotobaArray.push(4, 5, 6);
      let roboOboete = kotobaArray.join(", ");
      return roboOboete;

    } else if (newArray.includes(7)) {
      kotobaArray.push(4, 5, 6, 7);
      let roboOboete = kotobaArray.join(", ");
      return roboOboete;

      } else if (newArray.includes(8)) {
      kotobaArray.push(4, 5, 6, 7, 8);
      let roboOboete = kotobaArray.join(", ");
      return roboOboete;

    } else if (newArray.includes(9)) {
      kotobaArray.push(4, 5, 6, 7, 8, 9);
      let roboOboete = kotobaArray.join(", ");
      return roboOboete;

    }
  }
}

    
