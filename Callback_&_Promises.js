// Callbacks are functionality of a code where we can use a certain funtionality of the code after a certain period of time.
// For Ex:-
// setTimeout(function(){
//     console.log("CALLBACK after 5000ms.")
// }, 5000)


// Let us assume an example where an e-commerce website has different api's for CreatingOrder, ProceedToPayment, showOrderSummary 
// and the other should be called only if the first one is executed.

// const cart=["Shoes", "T-shirts", "Pants"]

// api.createOrder(cart, function(){           //Hence the dependency between CreateOrder and proceedToPayment is handled this way

//     api.proceedToPayment(function() {

//         api.showOrderSummary(function(){
//             api.updatewallet()
//         })

//     })
// })      //This continuous callback of apis's is termed as callback hell

// Over here we give our entire control of the code to the let us suppose createOrder api, as if it would be executed then only it would proceed further.
//nd we also don't know what is happening inside the create order  


// PROMISES
// Promises are used to handle async operations of JS 

// const cart = ["Pants", "Shoes", "T-shirts"];

// createorder(cart, function(OrderId){
//     proceedToPayment(OrderId);
//     });      //An API that returns OrderId once the order is placed

    
// What is a PROMISE?
// Ans :- It works as a placeholder for the data untill we receive a value from asynchronous operation.
//                                                  OR
// A container for a future value.
//                                                  OR
// It is a object which represents the eventual completion or failure of an asynchronous operation


/*By doing this we create a promise that return an object named promise, 
firstly upon initialization with key-value pairs and set the value pairs as undefined.
When the exection of the createOrder is completed then the values are updated in the promise named object.
// */
// const promise = createOrder(cart);      

// promise.then( function(OrderId){
//     proceedToPayment(OrderId);
//     })

// const GITHUB_API = "https://api.github.com/users/akshaymarch7"

// const user = fetch(GITHUB_API);

// console.log(user);      //rn it would show Promise { <pending> } as at time of exectuion of line 51 the data is still being fetched 
// // and the line 53 is executed, after sometime the data would be completely fetched hence would show "fulfilled".

// user.then(function(data){       //Creating a callback to print the data once it's completely fetched
//     console.log(data);
// })


// const promise = createOrder(cart);      

// promise.then( function(OrderId){
//     proceedToPayment(OrderId);
//     })

// // Similarly removing the promise named variable    

// createOrder(cart)
// .then(function(OrderId){
//     return proceedToPayment(OrderId)        //NOTE:- THe return keyword is IMP for smooth flow of data in the chaining process otherwise we might lose some data in the chains
// })
// .then(function(paymentInfo){
//     return showOrderSummary(paymentInfo)
// })
// .then(function(paymentInfo){
//     return UpdateWallet(paymentInfo)
// })

// // Can also be written with use of arrow functions to avoid the return keyword.
// createOrder(cart).OrderId
//     .then(OrderId => proceedToPayment(OrderId))
//     .then(paymentInfo => showOrderSummary(paymentInfo))
//     .then(paymentInfo => UpdateWallet(paymentInfo));
    


