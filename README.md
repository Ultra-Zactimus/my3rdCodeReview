# My Third Code Review at Epicodus
#
Authored By: Zachary Green
A Robot Translator Document: Created under the guidance of Epicodus
#
#
### Description
#
This document is a student HTML project: demonstrates the usage of Arrays and Loops within Javascript, Test Driven Development (TDD) and the separation of Business Logic from User Interface Logic.
#
Document is a prompt to enter numbers. The fictional characert of Mr. Roboger will translate the numbers into Robo-Lingo and print them back to the screen.
#

## Technologies Used: 
#
HTML, CSS, BootStrap, JavaScript, Jquery, Markdown, GitBash, gitHub
#

Click on this link 
"https://github.com/Ultra-Zactimus/myThirdCodeReview"
to go to GitHub page for the Repository.

 On the page is a green button that says "Code" click that and then click the button with 2 rectangles on the right to copy the .git file. 
 
 Next you will need to download the program Git for (Mac), GitBash (Windows) "https://gitforwindows.org/v". 
 
 On the Terminal on Mac or Windows type: cd ~  snd press enter button to make sure you are on the right directory, then type: cd Desktop and enter to move to your computer's desktop. 
 
 Next type in: git clone https://github.com/Ultra-Zactimus/myThirdCodeReview.git and then hit enter. 
 
 This should put a cloned folder of the document on your desktop. Next open the folder and click on the file name index.html to open it in a browser and view it.
#

### Test Driven Development
#

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
let roboKotoba = ['0', 'beep', 'boop', "Won't you be my neighbor?", 4, 5];
let roboOboete = "0, beep, boop, Won't you be my neighbor?, 4, 5";
mrRoboto(5);
Expected Result: "0, beep, boop, Won't you be my neighbor?, 4, 5"

Test: "Should return beep even if 0 is first"
let roboKotoba = ['0', 'beep', 'boop', "Won't you be my neighbor?"];
mrRoboto(01);
Expected Result: 'beep'

Test: "Should return beep no matter how many '1's are entered"
let roboKotoba = ['0', 'beep', 'boop', "Won't you be my neighbor?"];
mrRoboto(1111);
Expected Result: 'beep'

Test: "should push 4 into roboKotoeba and 6,7,8,9 into roboOtoeba if inputs match those numbers"
let roboKotoba = ['0', 'beep', 'boop', "Won't you be my neighbor?", 4];
let roboOtoeba = ['0', 'beep', 'boop', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9];
mrRoboto(4)
mrRoboto(6)
mrRoboto(7)
mrRoboto(8)
mrRoboto(9)
Expected Results: '4' "0, beep, boop, Won't you be my neighbor?, 4" "0, beep, boop, Won't you be my neighbor?, 4, 5, 6" etc.

Test: "Should return highest value number dispite placement"
let roboKotoba = ['0', 'beep', 'boop', "Won't you be my neighbor?"]
mrRoboto(21)
Expected Results: "boop"

#

## Link to User Page: https://github.com/Ultra-Zactimus
#

## Known Bugs:
#
Document is in full working condition at this time.
No known bugs. 
#
## License:
#
Copyright of Zachary Green
January 21st 2022
This is an Open Source document licenced with the MIT Open Source Licence