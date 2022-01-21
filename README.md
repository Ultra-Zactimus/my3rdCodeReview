Description: mrRoboto(input)

Test: "Should return 0 if input is 0"
Code:
mrRoboto(0);
Expected Results: 0

Test: "Should return beep if input is 1"
Code:
const RoboLingo = "beep";
mrRoboto(1);
Expected Results: "beep"

Test: "Should return boop if input is 2"
Code:
const RoboLingua = "boop";
mrRoboto(2);
Expected Results: "boop";

Test: "Should return 'Wont you be my neighbor?' if input is 3"
Code:
const roboSwag = "Won't you be my neighbor?";
mrRoboto(3);
Expected Result: "Wont you be my neighbor?"

Test: "should return all 3 previous conditions from an array"
Code:
const roboKotoba = ['0', 'beep', 'boop', "Won't you be my neighbor?"];
mrRoboto(0);
mrRoboto(1);
mrRoboto(2);
mrRoboto(3);
Expected Result: '0' , 'beep' , 'boop' , "Won't you be my neighbor?"

Test: "Should return contents of the Array if input is 5"
Code:
const roboKotoba = ['0', 'beep', 'boop', "Won't you be my neighbor?"];
mrRoboto(5);
Expected Result: "0, beep, boop, Won't you be my neighbor?"