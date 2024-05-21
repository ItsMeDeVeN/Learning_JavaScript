//7 types = string, number, bigint, boolean, symbol, null, undefined.
// let person = {       //Storing function as objects key
//     name : 'john',
//     sayHi : function(){
//         console.log("Hey, it's me.");
//     }
// };
// person.sayHi();

// let str  = "To be uppercased"

// console.log(str.toUpperCase());

// let num = 1.2345;
// console.log(num.toFixed(2)); // To Round-off the number

// console.log(typeof 0); //number
// console.log(typeof new Number(0));      //object

// Objects are always truthy in if() conditions
// let zero = new Number(0);

// if(zero){
//     console.log("It's always truthy as object in the if() loop is always true.");
// }

// console.log(str.test);       //undefined





// NUMBERS
// A bigint can be seperated as commas using _ keyword.
// let n = 1_000_000_000;
// // or n = 1e9;
// console.log(n);
// console.log(7.3e9);     //7300000000
// let n1 = 1e-7;      // 1/10^7
// console.log(n1);

// Binary,Hexal, Octal number

// console.log(0xff);
// console.log(0xFF);      //Case doesn't matter 
// let a = 0b11111111; //binary of 255
// let b = 0o377;      //octal of 255

// console.log(a==b);       //True as both the numbers are same

// Tostring(n) => n gives the type of string to be converted into

// let num = 250;
// console.log(num.toString(2));
// console.log(num.toString(16));

// let num1 = 30.134;
// console.log(Math.floor(num1));
// console.log(Math.ceil(num1));
// console.log(Math.round(num1));
// console.log(Math.trunc(num1));

// console.log(num1.toFixed(1));       //30.1
// num1 = 30.174;
// console.log(num1.toFixed(1));       //30.2

// console.log(0.1 + 0.2);         //hence 0.1 + 0.2 is not equal to 0.3
// To fix the issue we can....
// let n2 = 0.1 + 0.2;
// console.log(n2.toFixed(2)); // Always note that toFixed always returns a string value hence convert it to num we need to log (+n2.toFixed(2));


// NaN Represents an error
// Just because NaN===NaN returns false we need to apply the fucntion isNaN();
// While checking whether the number isFinite or not the input is firstly converted to a number, 
// if it's a string it's converted to NaN,infinity,-infinity which would return a false value.
// console.log(isFinite(15));      //true
// console.log(isFinite("str"));   //false
// console.log(isFinite(Infinity));//false

// The parseInt and parseFloat are used to extract numbers and floats from values including various strings and numbers
// let dollar = "124$" 
// console.log(parseInt(dollar)); //124
// dollar = "124$345$"
// console.log(parseInt(dollar)); //124
// dollar = "124.3$"
// console.log(parseInt(dollar)); //124

// let point_dollar = "123.456$";
// console.log(parseFloat(point_dollar)); //123.456
// point_dollar = "123.456 678.89$";
// console.log(parseFloat(point_dollar)); //123.456
// point_dollar = "123$";
// console.log(parseFloat(point_dollar)); //123





// Math Functions:-
// console.log(Math.random());     //Generating random numbers
// console.log(Math.max(3, 5, 8, 100 , -5));       //100
// console.log(Math.min(3, 5, 8, 100 , -5));       //-5
// console.log(Math.pow(5,2));         //25






// STRINGS
// Single quotes, double quotes, backticks => used to take as dynamic input in a console.log
// sum = function(a,b) {
//     console.log(`Summation of ${a} & ${b} is ${a+b}`);
// }
// sum(3,5);

// backticks also allows strings to span to multiple lines.
// let guest = `Guests:
// *sab
// *log
// *ke
// *naaam`;
// console.log(guest);

// //special characters:- \n => New Line, \t => Tab
// let str1 = "Hello\nWorld";
// console.log(str1);

// let str2 = `Hello
// World`;
// console.log(str2);
// console.log(str1 == str2);      //true

// String length:-
// console.log(`My\n`.length); //3

// let txt = "ToBeDetected";
// console.log(txt[0]);        //T
// console.log(txt.at(0));     //T

// console.log(txt[-2]);       //undefined
// console.log(txt.at(-2));    //e

// String are immutable i.e:- cannot be updated using str[1] = 'h' but can be updated using....
// let str = "Hi";
// str = 'h' + str[1];
// console.log(str);       //hi


//Can change the case using methods => string.toUpperCase(), string.toLowerCase()

// let str = "Finding the index";
// console.log(str.indexOf('the'));        //8
// console.log(str.indexOf('ind'));        //1

// console.log(str.indexOf('ind', 3));     //To find the second occurence of the string

// let str1 = "we all should know we aare capable of we things many we times";
// let target ="we";

// let pos = 0;
// while (true) {
//   let foundPos = str1.indexOf(target, pos);
//   console.log(pos);
//   if (foundPos == -1) break;

//   console.log( `Found at ${foundPos}` );
//   pos = foundPos + 1; // continue the search from the next position
// }

// if(str1.indexOf("know")){
//     console.log(`We found it at ${str1.indexOf("know")}`);
// }

// // Some other methods are also ther such as str.startsWith, str. endsWith, str.includes
// // To find the substrings
// let str2 = "Lambatext";
// console.log(str2.slice(0,4));       //From index 0 to 4 excluding 4
// console.log(str2.slice(2,6));       ////From index 2 to 6 excluding 6 
// console.log(str2.slice(3));         //From index 3 all
// console.log(str2.slice(-5,-2));     //5th from right upto 2 from right  

// Comparing Strings
// console.log('a'>'Z');   //true
// // different case letters have different codes
// console.log( "A".codePointAt(0) ); // 65
// console.log( "Z".codePointAt(0) ); // 90
// console.log( "a".codePointAt(0) ); //97
// console.log( "z".codePointAt(0) ); // 122

// console.log(String.fromCodePoint(90)); //Z

// str = '';
// for (i = 65; i<=220; i++){
//     str += String.fromCodePoint(i);
// }
// console.log(str);
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ