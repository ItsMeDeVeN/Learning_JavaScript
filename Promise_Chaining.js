// //Promises Chaining 
// // Creating our own Promise Object/ Created our own api of createOrder  


// // Consumer Part
// const cart = ["Shirt", "Cargos", "Shoes"]

// createOrder(cart)   //return OrderId
// // console.log(promise)        //Would return Promise { <pending> } if promise takes a delay with setTimeout whereas would show Promise { '123456' } when no delay is there in fetching of data.  
// .then(function(OrderId){         //Used when the promise is resolved.    
//     console.log("Order with Order Id:- "+OrderId+"  placed successfully.")
//     return OrderId;
// })
// .then(function(OrderId){
//     return proceedToPayemnt(OrderId);
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo);
// })
// .catch(function(err){               //Used when the promise statement is being rejected of any of the above then statements but it won't evaluate any of the 'then' statements below itself 
//     console.log(err.message);
// })
// .then(function(){
//     console.log("No matter whatsoever error occurs this block will always be executed.")
// })

// // Producer Part

// // Our own API createOrder
// function createOrder(cart){
//     const pr = new Promise(function(resolve, reject){ //Using the Promise constructor we can create new Promise and resolve,reject are inbuilt parameters given by JS while developing the Promise API
//         //Validate order
//         if(! validateorder(cart)){
//             const err = new Error("Cart is not a valid one.")
//             reject(err);
//         }
        
//         // Default under else and here just taking a random OrderID, IRL would take it from the Database.
//         const OrderId = "123456";
//         if(OrderId){
//             setTimeout(function(){resolve(OrderId)}, 5000);     //Works as a Real-Life API where it takes time to fetch data from API
//         }

//     });
//     return pr;
// }

// function proceedToPayemnt(OrderId){

//     return new Promise(function(resolve, reject){
//         resolve("Payment successful fo the id:- "+OrderId);
//     })
// }


// function validateorder(cart){
//     return false;
// }


/*
createOrder,
proceedToPayment,
showOrdersummary,
updateWallet,
*/


// const cart_items = ["Mouse", "Keyboard", "Cover"];

// createOrder(cart_items)
// .then(function(orderId){
//     console.log("Order with id:-"+orderId+" placed successfully");
//     return orderId;
// })
// .then(function(orderId){
//     return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//     console.log("Payment info:"+paymentInfo);
//     return paymentInfo
// })
// .then(function(paymentInfo){
//     return showOrdersummary(paymentInfo)
// })
// .then(function(ordersummary){
//     return ordersummary
// })
// .then(function(ordersummary){
//     console.log(ordersummary);
//     return ordersummary
// })
// .then(function(updatedwallet){
//     return updateWallet(updatedwallet)
// })
// .then(function(updatedwallet){
//     console.log("Wallet Updated:"+updatedwallet);
//     return updatedwallet
// })
// .catch(function(err){
//     console.log(err.message);
// })




// // Producer
// function createOrder(cart_items){
//     return new Promise(function(resolve, reject){
//         if(! validatecartitems){
//             const err = new Error("Cart items not validated")
//             reject(err);
//         }
//         const orderId = "098765"
//         if(orderId){
//             setTimeout(function(){resolve(orderId)},5000);
//         }
//     });
// } 

// function proceedToPayment(orderId){
//     return new Promise(function(resolve, reject){
//         resolve("Payment succesfull for id:"+orderId)
//     })
// };

// function showOrdersummary(ordersummary){
//     return new Promise(function(resolve, reject){
//         resolve("Reached order summary.")
//     })
// };

// function updateWallet(updatedwallet){
//     return new Promise(function(resolve, reject){
//         resolve("Updating the wallet after succesfull order placement")
//     })
// }


// function validatecartitems(cart_items){
//     return true;
// }


// Async & Await functions

async function defined(){               //The one with async type always returns promsie object
    let ahmedabadweather = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("50℃")}, 1000)
    })

    let bangloreweather = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("25℃")}, 5000)
    })

    let ahmbdW = await ahmedabadweather
    let bangW = await bangloreweather
    console.log(ahmbdW)
    console.log(bangW)
}

const definedagain = async () =>{
    console.log("definedagain function which is not an await type is called.")
}
// console.log("Firstly Executed");
// let b = defined();          //Both the outputs will be printed once all the execution is completed.
// let c = definedagain()      
// If they are declared wihtout using await keyword then all are executed parallely and the execution of one with await has started and it runs in the background whereas the one without await is also executed
// IF we declare both with await keyword, the first one would be executed and it's value will be fetched then the second one would execute then they are executed simultaneously 
// console.log(b);
async function executeAsyncFunctions() {
    let b = await defined();                //await functions can only be declared under async function. and would execute one-by-one not parallely.
    let c = await definedagain();
    
}

executeAsyncFunctions();
// react basic, intermediate