// Object methods (This)

// let user = {
//     name : "deven",
//     age : 20,
// }

// user.sayHi = function(){            //Defining a function in object to call it later using it as object's key value            
//     console.log("Hi!!!!!!!");
// }
// user.sayHi(); 

// // Defining a function before and then assigning it to an object
// function sayname(){
//     console.log("It's My name");
// }
// user.speakname = sayname;
// user.speakname();


// let user1 = {
//     name : "Deven",
//     lastname : "Bariya",
//     age : 20,
//     humnan : true,

//     speakname() {
//         console.log(this.name);  //Defining a function in the object and using this.key to access the key-value pair. Can user 'user' instead of this as well.
//     }
// };
// user1.speakname();
// let admin = user1;
// user1 = null;

// user1.speakname();
// admin.speakname();
// console.log(admin.lastname);

// Arrow function has no 'this' keyword


// Defining and object using a funtion first assign its value using this function
// function Obj_inp(name){
//     this.name = name;
//     this.isAlive = true;
//     this.age = "cannot define";
// }

// let Deven = new Obj_inp("Deven");
// let Bariya = new Obj_inp("Bariya");
// console.log(Deven);
// console.log(Bariya);

// A constructor is something where we define the keys first using the 'this' keyword and then later on calling the functions using function_name(value)
// return with an object returns that object, in all other cases 'this' is returned.
// function BigUser(){
//     this.name = "Deven";

//     return { name : "Kong" };
// }

// console.log(new BigUser().name);    //If there's no return statement in the above piece of code then it would return "Deven".

// // Optional Chaining using '?'

// let user = {}; // user has no address
// alert( user.address && user.address.street && user.address.street.name ); //If address does not have any name or even not any street name then just the address is returned instead of returning a null value;
// alert( user?.address?.street ); // undefined (no error)         By using the '?' operator

// let user = null;
// // console.log(user?);
// user ? console.log("True") : console.log("False");


// // Symbol
// // here are two symbols with the same description – they are not equal:
// let id1 = Symbol("id");
// let id2 = Symbol("id");

// console.log(id1 == id2); // false
// Symbols don't auto-convert to a string.
let id = Symbol("id");
console.log(id);

let id1 = Symbol("id");
console.log(id1.toString());

let id2 = Symbol("id");
console.log(id2.description); // id
