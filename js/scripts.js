function mrRoboto(input) {
  const roboKotoba = ['0', 'beep', 'boop', "Won't you be my neighbor?"];
  if (input === 0) {
    return roboKotoba[0];
  } else if (input === 1) {
    return roboKotoba[1];
  } else if (input === 2) {
    return roboKotoba[2];
  } else if (input === 3) {
    return roboKotoba[3];
  }
}
mrRoboto();
