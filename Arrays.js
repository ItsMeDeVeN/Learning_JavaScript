// // Two Syntax
// // let arr = new Array();
// let arrs = ["Apple","Banana","Chickpea","Dodo"];
// console.log(arrs[2]);
// arrs[3] = "Changed";
// arrs[4] = "Added";
// console.log(arrs,arrs.length)

// An array can store diff types of values

// let var_arr = ['Hello', {name:"Deven"}, 20, true, function(n){console.log(n*n);}]
// console.log(var_arr[1].name);
// var_arr[4](9);
// The element can also be found as 
// console.log(var_arr.at(-2));

// For Stacks => LIFO, Queue => FIFO, Arrays in JS can work as both 

// console.log(arrs.pop());    //Dodo
// console.log(arrs);
// console.log(arrs.push("Dodo"));    //4
// console.log(arrs);      //[ 'Apple', 'Banana', 'Chickpea', 'Dodo' ]

// console.log(arrs.shift("Apple"));
// console.log(arrs);      //[ 'Banana', 'Chickpea', 'Dodo' ]
// console.log(arrs.unshift("Apple"));
// console.log(arrs);      //[ 'Apple', 'Banana', 'Chickpea', 'Dodo' ]

// pop, push functions are performed at the end of the array where as 
// the shift, unshift functions are executed at the start of the array.

// let fruits = ["Banana"];
// let arr = fruits;
// console.log(fruits === arr);
// fruits[1] = "Added";
// console.log(arr);

// let just_arr = [];
// just_arr.age = 25;
// just_arr[999] = 35;
// console.log(just_arr);      //[ <999 empty items>, 35, age: 25 ]

// array can use the for(i=-;i<arr.length;i++) loop but there is a method using 'of' keyword as well to iterate thorugh it
// let fruits = ["Apple","Banana","Chickpea","Dodo"];
// for(let fruit in fruits){
//     console.log(fruit);     //0 1 2 3
// }

// fruits.length = 7;          //Expand using others as undefined types
// console.log(fruits);        //[ 'Apple', 'Banana', 'Chickpea', 'Dodo', <3 empty items> ]
// fruits.length = 3;          //truncate upto length = 3;
// console.log(fruits);
// let new_arr = new Array(2);     //Just initializes a new array of length 2 with all as undefined
// console.log(new_arr[1], new_arr.length);

// 2-D arrays
// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(matrix[1][2]);      //6


// Never compare an array with ==
// console.log( [] == [],[0] == [0], 0 == [],'0' == [], 0 == '', '0' == '') ;      //false false true false true false 


// ARRAY METHODS

// let arra = ["First", "Second", "Third", "Fourth"];
// delete arra[2];
// console.log(arra); //["First", "Second", , "Fourth"]


let arr = ["I", "study", "JavaScript", "right", "now"];
// console.log(arr.length); // 5
// console.log(arr.splice(0, 3, "Let's", "dance"));         //remove 3 elements from 0 ,returning them and replace them with others
// console.log( arr ) // now ["Let's", "dance", "right", "now"]
// console.log(arr.length);  //4
// Different way of adding in the array.
// arr.splice(3,0,"Adding","using","splice method"); //removing 0 elements and adding other 2
// console.log(arr);


// slice
// console.log(arr.slice(2 ,4));       //From index 2 to 4 (Excluding it)
// console.log(arr.slice(-3));         //From -3 to last all elements
// arr.concat([3,4]);          //[...,3,4]
// arr.concat([5,6],7,8,9);     //[...,5,6,7,8,9]


// Iterate forEach Covered in previous tutorials
// Keywords = 
// indexOf(text) => Returns the index of text, lastIndexOf(text) => Returns the last index of text, includes(text)=> boolean stating in the array or not
// find,findIndex, findLastIndex
// reverse, 


// Filter
// let users = [
//     {id:1, name:"Deven"},
//     {id:2, name:"Bariya"},
//     {id:3, name:'Jayvant'}
// ]
// filter_users = users.filter(item => item.id < 3);
// console.log(filter_users);


// MAPPING
// let mapped = arr.map(item => item.length);      //arr = ["I", "study", "JavaScript", "right", "now"];
// console.log(mapped);

// Splitting
// names = "JNNJ, INJO, YUGIY";
// let arrs = names.split(", ");
// console.log(arrs);
// for(index of arrs){
//     console.log(`Name = ${index}`);
// }

// Reducing

// let nums = [1,2,3,4,5,6,7,8]
// let summation = nums.reduce((sum,current) => sum + current, 0);     //converting it to 
// console.log(summation);

// Army age filtering 
// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//       return user.age >= this.minAge && user.age < this.maxAge;
//     }
//   };
  
//   let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30}
//   ];
  
//   // find users, for who army.canJoin returns true
//   let soldiers = users.filter(army.canJoin, army);
  
//   alert(soldiers.length); // 2
//   alert(soldiers[0].age); // 20
//   alert(soldiers[1].age); // 23

// Iterabels = Reference => https://javascript.info/iterable

let user = {
    name: "John",
    age: 30
  };

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entires(user));