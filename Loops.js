// Loops While, Do-While
// for(i = 0; i<5 ; i++){
//     console.log(i);
// }

// can skip certain parts in the loop as well if are already predefined
// let j =0;
// for (; j<5; j++){
//     console.log(j);
// }

// Break Keyword :- Used to come out of the loop if it turns into a infinite loop
// Infinite loop untill u press OK.
// "use strict";
// while (true) {
//   let value = +confirm("Type OK!!!!!", '');
//   if (value) break; // (*)
// }
// alert( "Yeah hui na baat!!!!!!!!!" );

// Continue Keyword :- Used to skip an iteration if the condition is satisfied
// for (z = 0; z < 10; z++){
//     if(z%2==0)
//         continue;
//     console.log(z);
// }

// A 2-D traversing fucntion
// for(i = 0; i<3; i++){
//     for(j = 0; j<3; j++){
//         console.log(`The cords are ${i},${j}.`)
//     }
// }

// For in, For of, ForEach
// Referecne :- https://www.w3schools.com/js/js_loop_for.asp
// For In Loop
// const number = [45, 4, 9, 16, 25];
// let tt = "";
// for (let x in number) {         // It loops through the property name of the object and is called using property[x]
//   tt = +tt + number[x];
// }
// console.log(tt);


// // For of Loop
// const num = [45, 4, 9, 16, 25];
// let tat = "";
// for (let x of num) {            // It loops through the gicen object but is directly using the x.
//     console.log(x)
//   tat = +tat + x;
// }
// console.log(tat);


// // ForEach Loop
// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);
// function myFunction(value) {
//   txt = +txt + value;
// }
// console.log(txt)




// Switch Loop
let n1 = 6;
switch(n1){
    case 1:
        console.log("Still Small");
        break;
    case 3:
        console.log("Got bigger");
        break;
    case 2:
        console.log("Gotcha!!!");
        break;
    case 4:                         //Grouping the cases
    case 5:
        console.log("Dont enter 4 or 5");
        break;
    default:
        console.log("Enter only 1,2,3")
}
