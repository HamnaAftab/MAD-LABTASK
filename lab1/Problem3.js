//Problem 3:
//Write program to find sum of even digits. Input 23617 output 2+6=8.

let numStr = [2,3,6,1,7];
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] % 2 === 0){ 
    sum = sum + numStr[i];
    }
  }
 
 console.log(sum);