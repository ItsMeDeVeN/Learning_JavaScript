// Rest
// The rest function is used to allocate the unwanted values to a single variable

// let arr = ["deven","bariya","jayvant","bariya","mamta","bariya"];
// let [firstname,lastname, ...args] = arr;
// console.log(args);       //[ 'jayvant', 'bariya', 'mamta', 'bariya' ]
// console.log(args[2]);    //mamta



// hence basically we are converting a list of arguments into array.
// function showName(firstName, lastName, ...titles) {
//     console.log( firstName + ' ' + lastName ); // Julius Caesar
  
//     // the rest go into titles array
//     // i.e. titles = ["Consul", "Imperator"]
//     console.log( titles[0] ); // Consul
//     console.log( titles[1] ); // Imperator
//     console.log( titles.length ); // 2
//   }
  
//   showName("Julius", "Caesar", "Consul", "Imperator");

// And can also be used to take into consideration multiple inputs from a single function such as...

// function sum(...args){
//     let sums = 0;
//     for(let arg of args){
//         sums += arg;
//     }
//     return sums;
// }
// console.log(sum(1,2));          //3
// console.log(sum(1,2,4,5));      //12





// spread syntax
let arry = [3,5,2,1];
let arry1 = [9,-2,3,6,1,0]
console.log(Math.max(arry));        //NaN

// Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, not a single array:
// Hence When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.
console.log(Math.max(...arry));         //5
console.log(Math.max(2,...arry,9,...arry1, 25));        //25bcuz the max fxn sees the input as 2,3,5,2,1,9,9,-2,3,6,1,0,25
// Similarlly

let str = "Hello";
// Array.from converts an iterable into an array
alert( Array.from(str) ); // H,e,l,l,o

// Copying an Array
let arr = [1, 2, 3];

let arrCopy = [...arr]; // spread the array into a list of parameters, then put the result into a new array
// do the arrays have the same contents?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true
// are the arrays equal?
alert(arr === arrCopy); // false (not same reference)
// modifying our initial array does not modify the copy:
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 
