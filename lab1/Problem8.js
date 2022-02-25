/*Problem 8:
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string: 'comsats'
Expected Output: 'acmost'
*/
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("comsats"));
