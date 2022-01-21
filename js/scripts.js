function mrRoboto(input) {

  let userInput = input.toString();
  let roboKotoba = ['0', 'beep', 'boop', "Won't you be my neighbor?"];

    if (userInput.includes(0)) {
      return roboKotoba[0];

    } else if (userInput.includes(1)) {
      return roboKotoba[1];

    } else if (userInput.includes(2)) {
      return roboKotoba[2];

    } else if (userInput.includes(3)) {
      return roboKotoba[3];

    } else if (userInput.includes(4)) {
      roboKotoba.push(4)
      return roboKotoba[4];

    } else if (userInput.includes(5)) {
      roboKotoba.push(4,5);
      let roboOboete = roboKotoba.join(", ");
      return roboOboete;

    } else if (userInput.includes(6)) {
      roboKotoba.push(4,5,6);
      let roboOboete = roboKotoba.join(", ");
      return roboOboete;

    } else if (userInput.includes(7)) {
      roboKotoba.push(4,5,6,7);
      let roboOboete = roboKotoba.join(", ");
      return roboOboete;

    } else if (userInput.includes(8)) {
      roboKotoba.push(4,5,6,7,8);
      let roboOboete = roboKotoba.join(", ");
      return roboOboete;

    } else if (userInput.includes(9)) {
      roboKotoba.push(4,5,6,7,8,9);
      let roboOboete = roboKotoba.join(", ");
      return roboOboete;

    }
}

mrRoboto(4);
