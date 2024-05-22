/*Object-Oriented Programming
Object is an instance of a class.

Using an example we can understand the basic concept as if we follow a particlar Blueprint for construting many buildings 
then all the buildings would be identical in terms of their basic structure as they are following the same blueprint.
So here we can state that Class = Blueprint, Object = Buildings
Class = Car          =>       Objects = Swift, Fortuner, Zen, City
Class has 2 properties => Properties and Methods.
Lets decalre a Class as Calculation, 
Hence would have properties as Different variables in it, like let a,b,c. 
and would have methods such as sum(){ return a+b; },difference(){ return a-b; },multiply(){ return a*b; } etc.
Types of Methods :- Constructor, Prototype, Static

CONSTRUCTOR:- These are the methods which are executed on it's own while making an object of the class type. 
It's generally used in fucntions such as initializing some variables or giving them pre-defined values.
Syntax = constructor(){
    console.log("Object of Class "hello" created.")
}
Now everytime any object is created of class "hello" type then the actions under constructor would be performed automatically.
if a variable is passed in the constructor method then it has to passed while calling it during object initialization as well
for ex:- class Student(name){
    this.gname = name
    console.log(`the name is ${this.g`xname}`)
}
while calling it we need to write => let b = new Student("Deven"); 



PROTOTYPE:- The methods which are defined and can be executed by calling them. Like the message() method declared in the hello() class.
Syntax = 
    message(){
    console.log("Hello");
} 

STATIC: - U can never call a static method by using an object.  It can be called as => classname.methodname().
Syntax = 
class student{
    static staticmethod(){
        console.log("Static function called.");
    }
}
Calling the static method :- student.staticmethod();
*/

// class hello{
//     message(){
//         console.log("hello class is being called.!!!");
//     }
// }
// let a = new hello();
// a.message();

// class student{
//     constructor(age){
//         let name;
//         this.umar = age;
//         console.log("Constructor method of student class executed.");
//     }
//     hello(){
//         let lastname;
//         console.log(`It's a hey from ${this.name}, ${this.lastname} aged ${this.umar} years.`);
//     }
//     static staticMethod(){
//         console.log("Static method is called.");
//     }
// }

// let a = new student(20);
// a.name = "Deven";       //Decalring the value of the variable in class
// a.lastname = "Bariya";
// a.hello();
// student.staticMethod();


let arr = [ 1, 7, 3, 5];
console.log(typeof(arr));
console.log(...arr);