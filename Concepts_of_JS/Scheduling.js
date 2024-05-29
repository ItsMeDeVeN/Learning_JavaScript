// SCHEDULING
// setTimeout:-

// function sayHi(phrase, who) {
//     console.log( phrase + ', ' + who );
// }
//   setTimeout(sayHi, 3000, "Hello", "John"); // Hello, John  would be executed after 3000ms = 3sec

// //using strings is not recommended, use arrow functions instead of them, like this:
// setTimeout(() => console.log('Hello'), 3000);

// // Canceling with clearTimeout
// let timerId = setTimeout(() => console.log("never happens"), 1000);
// console.log(timerId); // timer identifier

// clearTimeout(timerId);
// console.log(timerId); // same identifier (doesn't become null after canceling)



// // CodeWithH
// let a = setTimeout(function(){
//     console.log("Task executed after 3000 secs.")
// }, 3000)
// clearTimeout(a);        //Clearing the timeout task scheduled
// console.log(a)

// function sum(a,b){
//     console.log("The sum called!!");
//     console.log(a+b);
// }

// // setTimeout(sum, 3000, 2, 3);            //Calling the sum function after 3000 with it's input parameters.


// // setInterval
// //Would run the part after every time interval mentioned
// Id = setInterval(sum , 2000, 2, 3);
// setTimeout(() => {clearInterval(Id); console.log('stop');}, 4000);      //Th eone just on the verge of getting executed won't be proccessed, instead the clearinterval statement would be executed


// Using nested setTimeout to work as a setInterval 
// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000); // (*)    
//   }, 2000);


// ARROW Function
// Arrow function has no "this" property
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
  
//     showList() {
//       this.students.forEach(
//         student => console.log(this.title + ': ' + student)
//       );
//     }
//   };
//   group.showList();

  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(function(student) {
        // Error: Cannot read property 'title' of undefined
        console.log(this.title + ': ' + student);
      });
    }
  };
  
  group.showList();