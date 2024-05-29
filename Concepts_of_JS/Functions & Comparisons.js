// FUNCTIONS

// Accessign the global variable in the function
// let name = "Deven";
// function Changename(){
//     name = "Dev";
// }
// console.log(name);
// Changename(name);
// console.log(name);


// RETURNING IN A FUCNTION
// Using confirm as return value for the function, return nothing i.e: return; causes immediate exit from the function.
// Returning nothing is equivalent to returning undefined.
// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('Do you have permission from your parents?');
//     }
//   }
  
//   let age = prompt('How old are you?', 18);
  
//   if ( checkAge(age) ) {
//     alert( 'Access granted' );
//   } else {
//     alert( 'Access denied' );
// }


// Can also pass functions as input for other functions
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "You agreed." );
//   }
  
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
  
//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);

// Function Expression V/S Function Declaration
// Function Declaration:- created using the keyword function like              => function square(n){ return n*n;} square(2);
// Fucntion Expression:-  created using var name nd declaring it as a function => let sum = function(num){return n*n;} square(2);
// Basically both can be differentiated only on the basis of their syntax


// ARROW FUNCTIONS  Sinple and consice way of declaring a function
// let sum = (a,b) => a + b;
// let sqaure = (n) => n*n;

// let age = 18;
// let allowed = (age >= 18) ?
//     () => console.log("Allowed"):
//     () => console.log("Not Allowed bcuz ur not 18+");

// allowed();

// MULTILINE ARROW FUNCTION
let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  console.log( sum(1, 2) ); // 3

// Reference :- https://javascript.info/comparison
// Comparator problem    >, <, >=, <= , == ;
console.log('Glee' > 'Glow'); //false      
// Comparison in string is calculated char by char from the extreme left    where z>a>Z>A
