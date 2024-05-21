// Reference:- https://javascript.info/type-conversions
// STRING CONVERSIONS
let value = true;
// console.log(typeof(value)); //boolean

let str = String(value);
// console.log(typeof(str)); //string

let num_str = "123";
// console.log(typeof(num_str)); //string
let num = Number(num_str);
// console.log(typeof(num)) //number

//Automatic conversion of string to number
let div = "6"/"3", 
div1 = 6/"3", 
div2 = "6"/3 ; // Both converted to number
// console.log(div); console.log(div1); console.log(div2); Output => 2
// console.log(typeof(div)); console.log(typeof(div1)); console.log(typeof(div2)); Output => number

let Nan = "Cannot be converted to number";
// console.log(Number(Nan)); //NaN

// console.log(Boolean("Hello"));// true     With anything inthe parenthesis is true, A simple " " is also termed as true.
// console.log(Boolean(""));//false          Only the empty one is termed as false



// Reference :- https://javascript.info/operators
//BASIC OPERATORS
//Addition(+), Subtraction(-), Multiplication(*), Division(/), Remainder(%), Exponentiation(**);

// String Concatenation
// let s = "My" + "World";
// console.log(s);

// //Both converted to string bcuz one string and one number cannot perform summation process
// console.log('1'+ 2);
// console.log(1 + '2');


// // Works on the basis of the first operator starting from left:- If string then concatenates, if numbers then summation,
// console.log(2 + 2 + '1'); // 41
// console.log(2 + '2' + 1); //221
// console.log('2' + 2 + 1); //221

// // Every operator except the '+' works as arithmetic operators only, bcuz only concatenation is required for the strings.
// console.log('6' - 1); //5
// console.log(6 - '1'); //5

// //No effect on numbers
// let x = 1;
// console.log( +x ); // 1
// let y = -2;
// console.log( +y ); // -2

// // Converts non-numbers
// console.log( +true ); // 1
// console.log( +"" );   // 0

// let apples = "2";
// let grapes = "3";
// console.log(apples + grapes); //23      String CONCATENATION is followed
// console.log(+apples + +grapes); //5     String is converted to number bcuz of the + operator
//Precedence of the operators => unary(plus, negation), exponentiation, (multiplication, division), (addition, subtraction), assignment
let a = 3;
let b = 4 - (a = 3 + 2); // a = 5, b = -1

// Increment/decrement
console.log(a); //5
let postfix = a++; //In the posfix function the variable is return first then it is incremented 
console.log(postfix); //5

console.log(a); //6
let prefix = ++a; // Whereas in the prefix function the variable is firstly incremented then it is returned
console.log(prefix); //7


// BITWISE OPERATORS
// AND &, OR | , XOR ^, NOT ~, LEFT SHIFT <<, RIGHT SHIFT >>, ZERO-FILL RIGHT SHIFT >>>

// Comma (Has a very low precedence)
v = (1+2, 3+5); // 8        The 1+2 is first evaluated nd then is thrown away, then 3+5 is evaluted and is returned as the result.
for (y = 1, z = 3, x = y * z; y < 10; y++); //Usage
