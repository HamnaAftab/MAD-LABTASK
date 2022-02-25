//Problem 6:
//Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "You WIN" otherwise display a message "Not matched".

const num = Math.ceil(Math.random() * 10);
 
 let gnum=5;
 if (gnum == num)
   console.log('Matched');
  else
   console.log('Not matched, the number was '+gnum);