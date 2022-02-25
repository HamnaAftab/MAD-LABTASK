//Problem 2:
//Write program to find sum of all digits. Input 23617 output 2+3+6+1+8=20

var value = 23617,
    sum = value
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
            return a + b;
        }, 0);

console.log(sum);