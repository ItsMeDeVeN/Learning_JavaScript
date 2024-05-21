// Object.keys => returns all the keys of the objects, similarlly values returns all the values in the object.
// Object.entires => shows all the key-value pairs
// let person = {
//     name: "Deven",
//     age: 20,
//     dsfgaf: "sdgasg",
// }
// console.log(Object.keys(person));       //[ 'name', 'age', 'dsfgaf' ]
// console.log(Object.values(person));     //[ 'Deven', 20, 'sdgasg' ]
// console.log(Object.entries(person));    //[ [ 'name', 'Deven' ], [ 'age', 20 ], [ 'dsfgaf', 'sdgasg' ] ]


// ARRAY DESTRUCTURING
// let arr = ["Deven","Bariya"];
// let [firstname, lastname] = arr;
// console.log(firstname,lastname);

// let [firstname, lastname] = "John Vedya".split(" ");
// console.log(firstname);
// console.log(lastname);

// for( let[key, values] of Object.entries(person)){
//     console.log(`The ${key} has values = ${values}.`);
// }



// The REST
// let rest_entries = ["Deven","Bariya","PDEU","SOT","CSE","21BCP003"];     
// let [name,surname, ...rest] = rest_entries;     //The unwanted values can be stored under the rest which is an object type array nd can be accesed using methods of accessing an array
// console.log(surname);       //Bariya
// console.log(rest);          //["PDEU","SOT","CSE","21BCP003"]]
// console.log(rest[2]);       //CSE
// console.log(typeof(rest));  //object


// OBEJCT DESTRUCTURING
// let person = {
//         name: "Deven",
//         age: 20,
//         Gender: "Male",
//     }

// let {name : n, age : a, Gender} = person;       //Can be accessed only using the original key names but can rename them here
// console.log(n);
// console.log(a);
// console.log(Gender);


// let {age, ...rest} = person;
// console.log(age);
// console.log(rest.Gender, rest.name);
// console.log(Object.entries(rest));


// NESTED DESTRUCTURING
// let image = {
//     size: {
//         height : 100,
//         width : 200,
//     },
//     Truth :true,
//     name : "Lana",
//     items : ["Potrait", "Portfolio"],
// }

// let replica =  {        //Replicating the object values as variabels
//     size: {
//         height,
//         width
//     },
//     Truth,
//     name,
//     typo = "New_Image",
//     items : [item1, item2],
// } = image;

// console.log(width);
// console.log(height);
// console.log(Truth);
// console.log(name);
// console.log(typo);
// console.log(item1);
// console.log(item2);


// Date And Time
let now = Date.now();
//     for(let i = 0; i < 1000000; i++){
//     let d_something = i*i*i;
//     // console.log(i);
// }
// let end = Date.now();
// console.log(`It took ${end} - ${now} = ${end - now} msecs in this loop.`)

// console.log(now);      //2024-05-21T05:57:41.186Z, this method has to be used while using date nd time except the present ones
// let rnow = Date();
// console.log(rnow);      //Tue May 21 2024 11:28:24 GMT+0530 (India Standard Time)

// let new_date = new Date("2024-03-24");      //By default it is considered as midnight 00:00:00
// console.log(new_date);

// Diff Methods = getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), getMilliseconds(), getDay(), getTime(), getTimezoneOffset()
// console.log(+now);      //1716272179759  same as Date.getTime()


// JSON
// The method JSON.stringify is used to convert an object into JSON/string 
// whereas JSON.parse is used to convert JSON back to object 


// JSON

// let new_obj = {
//     model : {
//         class : "G-Class",
//         company_name : "Merc",
//     },
//     horsepower : 2000,
//     type : "SUV",
// }

// console.log(new_obj);
// console.log(JSON.stringify(new_obj));       
// // The third argument of JSON.stringify(value, replacer, space) is the number of spaces to use for pretty formatting.


// JSON.parse()
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let user = JSON.parse(userData);
console.log(user);      //{ name: 'John', age: 35, isAdmin: false, friends: [ 0, 1, 2, 3 ] }
