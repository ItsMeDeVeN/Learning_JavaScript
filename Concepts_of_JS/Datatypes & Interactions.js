// Different types of datatypes are :- Numbers, BigInt, String, Boolean, null, undefined, objects & symbols, typeof
// Null and Undefined:-
// null and undefined are values that contain nothing. null and undefined are loosely equal to each other 
// but are strictly not equal to each other. NaN is a result of nonsensical computation which cannot produce a meaningful result. 
// NaN is the only value which isn't equal to itself.


// Numbers:- Range = -((2^53)-1) to ((2^53)-1)
let n = 123;
n = 123.45
console.log(1/0); //Infinity
console.log("not a number"/2); console.log(NaN/3); console.log(3*NaN); //NaN 
// Exponentiation notation
let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123

// BigInt declared by 'n' at the end of the integer;
let n1 = 1234567890123456789012345678901234567890n;


// String:-
let str = "Heelloouu";
let str_1 = `Using the backticks we can access previosuly declared variables and numbers:- ${str} and ${n + 3}`;
let str_2 = `Using the doublequotes we cannot access previosuly declared variables and numbers:- ${str} and ${n + 3}`;
console.log(str_1);
console.log(str_2);

// Boolean :- A simple true or false

let isGreater = 4 > 1;
console.log(isGreater);//true 

// undefined:-
let age;
console.log(age) //undefined
console.log(typeof(age)); //NOTE:- its type is predefined as undefined.


//null:-
let ages = null;
console.log(typeof(ages)); // NOTE:- typeof null is pre-defined as object type.


// typeof:-
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)

// Arrays
const cars = ["Saab", "Volvo", "BMW"]; //console.log(typeof(cars)); => object


// Objects
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}; //console.log(typeof(person)); => object


// // Alert, prompt, confirm
let umar = prompt('How old are you?', 100);   //The inputed entry of the prompt (100) is of the string type.
// alert(`You are ${umar} years old!`); // You are 100 years old!

// Confirm
// let isBoss = confirm("Are you the boss?");
// alert( isBoss ); // OK pressed => true, Cancel => false.