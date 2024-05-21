// ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, 
// and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.
//use_strict mode:-
// Declared using synatax:- "use strict";  If declared on the first line is applied to the global scope, 
//else in between somewhere then applicable only after that particular line. Also prevents from many errors.
// "use strict";
// $,_ is a valid variable name. Incorrect = 1ap, my-storage, any predefined keywords
// Variables:- 3 types = var, let, const
// Refrences:- https://www.w3schools.com/js/js_variables.asp,  https://www.w3schools.com/js/js_let.asp,  https://www.w3schools.com/js/js_const.asp


// The one with least protection
var a = 5;
var a = 6; //It's memory is allocated in global execution context.




// Using the let intro type
let c = 10;
// let c = 6; Cannot re-initialize the variable declared with let.
c = 20; // Can be re-declared using this method.




// The most strict declaration type
const d = 10;
// const d = 20; 
// d = 20; won't give error but the re-assignment task would not take place





