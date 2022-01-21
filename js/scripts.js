function mrRoboto(input) {

  let userInput = input.toString();
  let roboKotoba = ['0', 'beep', 'boop', "Won't you be my neighbor?"];

    if (userInput.includes(0)) {
      return roboKotoba[0];

    } else if (userInput.includes(1) && !userInput.includes(2 || 3 || 4 || 5 || 6 || 7 || 8 || 9)) {
      return roboKotoba[1];

    } else if (userInput.includes(2) && !userInput.includes(3 || 4 || 5 || 6 || 7 || 8 || 9)) {
      return roboKotoba[2];

    } else if (userInput.includes(3) && !userInput.includes(5 || 6 || 7 || 8 || 9)) {
      return roboKotoba[3];

    } else if (userInput.includes(5) && !userInput.includes(6 || 7 || 8 || 9)) {
      roboKotoba = [0, 'beep', 'boop', "Won't you be my neighbor?", 4, 5];
      let roboOboete = roboKotoba.join(", ");
      return roboOboete;

    }
}

mrRoboto(11);
