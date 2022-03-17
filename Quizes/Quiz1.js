//question 1
var obj = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("Outer func: this.foo=" + this.foo);
        // bar as output because this in object method refers to the object and thus accessing its attributes. 
        console.log("Outer func: self.foo=" + self.foo);
        // output is bar the value of foo because self has been assigned this which refers to the object obj. 
        (function () {
            console.log("inner func: this.foo=" + this.foo);
            //  the output is undefined beacuse the function is local, this refers to the function object which has no attribute foo. 
            console.log("inner func: this.foo=" + self.foo);
        }
            // output is bar, since the function is local and so is self attribute which furthur refers to object  of obj. 
            ());
    }
};
obj.func();
//question 2
var string = "sadia";
var palindrome = string.split('');
var q = true;
for (var i = 0; i < palindrome.length; i++) {
    if (palindrome[i] != palindrome.reverse()[i]) {
        console.log('The string is not a palindrome');
        break;
    }
    else if (i == palindrome.length - 1) {
        console.log("The string is a palindrome");
    }
}
//question 3
console.log(1 + "2" + "2"); //122
console.log(1 + +"2" + "2"); //32
console.log(1 + -"1" + "2");//02
console.log("A" - "B" + "2");//Reason //NaN2
console.log("A" - "B" + 2);//reason //NaN
//question 4
var myArray = ["a", "b", "c", "d"]
myArray.push("e")
myArray = ["0"].concat(myArray)
console.log(myArray);
//question 5
myObj = ["a", "b", "c", "d,e,f", "a,b,c"]
let [x, y, z, v] = myObj
console.log(x);
console.log(y);
console.log(z);
console.log(v);
for (let values in [x, y, z, v])//error
{
    console.log(values);
}
