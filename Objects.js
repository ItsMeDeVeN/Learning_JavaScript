// OBJECTS

// An object can be created with figure brackets {…} with list of properties. 
// A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.


// Can be created with two syntaxes
// let user1 = new Object();
// let user = {
//     name:"Deven",
//     age:20,
//     gender:"Male"
// };
// console.log(user.name, user.age, user.gender);
// // Value can be of any type, let's add A boolean one in it
// user.isAdmin = true;
// console.log(user);
// // can also be deleted
// delete user.isAdmin;
// console.log(user);

// Multiword key values are declared using ""  
// let user2 = {
//     name:"Deven",
//     age:20,
//     gender:"Male",
//     "Job Role":"Node.js Intern"
// };
// console.log(user2);

// // can be accessed using []
// delete user2["Job Role"];
// console.log(user2);
// user2["Checking again"] = true;
// user2["Checking again"] = 30;
// // delete user2["Checking again"];
// console.log(user2["name"]);
// console.log(user2.name);

// Property Value Shorthand
// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age,
//       // ...other properties
//     };
//   }
  
//   let user = makeUser("John", 30);
// //   console.log(user.name, user.age); // John

//   let user3 = {
//     age : 10,
//     umar : 20,
//     aayu : 30,
//     10 : 40,
//     5 : 40,
// }
// console.log(user3.name, user3.age);
// console.log(user3["age"], user3[5]);// if key value is a number it passed as a string in itself For ex. passing user3[5] and user3["5"] is same.
                                    // Whereas passing user3[age] and user3["age"] is not same.
// Also an special operatot "in" returns whether the given key is present in the object of not
// console.log("age" in user3);         // True 
// console.log("ages" in user3);        //False


// For in loop
// for (key in user3){
//     console.log(key);           //Priority is provided to the number types in string format starting with smallest one first then the string type.
//     console.log(user3[key]);        
// }

// let codes = {
//     91 : "India",
//     4 : "Australia",
//     5 : "Pakistan",
//     6 : "China",
// }

// for (key in codes){
//     console.log(+key);      //The string values can also be converted to the Number type.
// }





// Difference of objects versus primitives is that objects are stored and copied “by reference”, 
// whereas primitive values: strings, numbers, booleans, etc. are always copied “as a whole value”.

// let message = "hello";
// let phrase = message;
// console.log("Message:- "+message)
// console.log("Phrase:- "+phrase);

// let obj = {
//     user: 'Name',
//     Name: 'User',
// }
// console.log("Object name:-"+obj.Name);
// let ref = obj;                          //Just passing/copying by reference
// ref.Name = "Deven";                     //Result of copying it by reference
// console.log("Object name:-"+obj.Name);
// console.log("Copied Reference name:-"+ref.Name); 
// console.log(obj==ref); //true but if obj={} and ref={} then obj==ref would return false as it's location in memory would be diff.


// Cloning objects
// let clone = {};
// for ( key in obj ){
//     console.log(key);
//     clone[key] = obj[key];
// } 
// console.log(clone);
// console.log(obj["Name"]);

// Object Assign
// user = {
//     name: "john"
// }

// let var1 =  {value : true, again_val : "String"};
// let var2 = {valued : 45};

// Object.assign(user,var1,var2);                     //Used to merge objects with their key-value pairs
// console.log(user);

// Declaring an object along with its cloning
// let clone = Object.assign({},user); 
// console.log(clone);

// Nested key values in objects
// let users = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };

// let cloned = Object.assign({},users);
// console.log(cloned);
// users.sizes.height = 56;                //Reassigning the value in the parent object also forces it to change in the 
//                                         //cloned object functioning as a real-time call to the parent.

// console.log(cloned.sizes.height);
// console.log(users);

// STRUCTURED CLONE 
let user = {
    name : "Maja",
    age : 78
}
let structured_clone = structuredClone(user); //The structured Clone is used for just cloning it and not using it as real-time fetch of the parent object.
console.log(user === structured_clone);
user.name = "Badal Dala";
console.log(user);
console.log(structured_clone);


// Garbage Collection
// Reference :- https://javascript.info/garbage-collection
