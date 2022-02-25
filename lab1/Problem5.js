/*Problem 5:
Develop and demonstrate JavaScript script that uses functions for the following problems: 
1.	Parameter: A string 
2.	Output: The position in the string of the left-most vowel 
3.	Parameter: A number  
4.	Output: The number with its digits in the reverse order
*/
function vowel(str)
{
    var x=str.split(",")
    console.log(x[0])
}
vowel("a,e,i,o,u")

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(34587)));