function mrRoboto(input) {
    let inputArray = input.split("");
    let roboKotoba = ['0', 'beep', 'boop', "Won't you be my neighbor?"];
      for (i=0; i < inputArray.length; i++)

        if (inputArray.includes(0)) {
          return roboKotoba[0];
    
        } else if (inputArray.includes(1)) {
          return roboKotoba[1];
    
        } else if (inputArray.includes(2)) {
          return roboKotoba[2];
    
        } else if (inputArray.includes(3)) {
          return roboKotoba[3];
    
        } else if (inputArray.includes(4)) {
          roboKotoba.push(4)
          return roboKotoba[4];
    
        } else if (inputArray.includes(5)) {
          roboKotoba.push(4,5);
          let roboOboete = roboKotoba.join(", ");
          return roboOboete;
    
        } else if (inputArray.includes(6)) {
          roboKotoba.push(4,5,6);
          let roboOboete = roboKotoba.join(", ");
          return roboOboete;
    
        } else if (inputArray.includes(7)) {
          roboKotoba.push(4,5,6,7);
          let roboOboete = roboKotoba.join(", ");
          return roboOboete;
    
        } else if (inputArray.includes(8)) {
          roboKotoba.push(4,5,6,7,8);
          let roboOboete = roboKotoba.join(", ");
          return roboOboete;
    
        } else if (inputArray.includes(9)) {
          roboKotoba.push(4,5,6,7,8,9);
          let roboOboete = roboKotoba.join(", ");
          return roboOboete;
    
        }
    }
    
