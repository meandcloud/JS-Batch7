var a = 2;
var b = 1;

var result1 = --a;
var result2 = --b;
var result3 = --a - --b + ++b + b--;

document.write("a is: "+result1) // it will decrement 2 from 1

document.write("<br>b is: "+result2) // it will decrement 1 from 0

document.write("<br>result is: "+result3) 

// first it will decremenet from 2 to 1 then 0 - 2 = 0 after b is 1 then b-- is 0 = 1