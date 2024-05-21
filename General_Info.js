/* 
Q) WHAT ARE dependencies?
Ans :- Dependencies refer to external libraries, modules, or packages that a software project relies on to function properly.
Library Dependencies:External code libraries providing specific functionality, such as parsing JSON data, 
handling networking tasks, or performing mathematical calculations.
Examples include NumPy, React in building user interfaces in JavaScript,TensorFlow in machine learning .

Module Dependencies: In languages like Python, JavaScript modules are self-contained units of code that can be imported and used within a program.

Package Dependencies: Packages are collections of modules or libraries bundled together for easy distribution and installation. 
 Package managers like npm (Node.js), pip (Python) help manage and install these dependencies automatically.

 Q) WHAT IS npm?
 ANS :- npm stands for "Node Package Manager" for JavaScript, used with the Node.js runtime environment. 
 npm allows developers to discover, share, and reuse code packages and modules for building JavaScript applications.
Functionalities :- Package Installation_Publishing_Scripts , Dependency Management_Security, Versioning, Scripts.

Q) WHAT is the diff b/w npm and npx?
ANS :- Npm (Node Package Manager) and npx (Node Package Execute) are used to manage JavaScript environment packages for web applications.
Npm is used to install, uninstall, and update packages, while npx is used to execute packages directly without installing them  globally or locally beforehand.
*/


/*Q) What are git push,pull,commit?]
ANS:- We would be using "gitbash" which provides Git Command Line experience in the Operating System. 
Git is version control system used for tracing changes in the source code during software development. 
Stages of a file while editing a git file == MODIFIED  => STAGED => COMMITTED 

TO COPY = Ctrl + ins ; Paste = Shift + ins;
COMMANDS:-
git init
git status
touch demo.txt  => To create a new file.
git add demo.txt
git commit -m "First Commmit"
DIFFERENCE:- The repository that we created using the gitbash is solely for the local machine whereas the one using github is mainttained on the github's platform.
For connecting to the GITHUB Repo:-
git remote add origin https://github.com/ItsMeDeVeN/demo.git
git remote -v
git push origin master

…or create a new repository on the command line
echo "# Learning_JS" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ItsMeDeVeN/Learning_JS.git
git push -u origin main

or push an existing repository from the command line
git remote add origin https://github.com/ItsMeDeVeN/Learning_JS.git
git branch -M main
git push -u origin main
*/


/*
JAVASCRIPT:-
Q) How does a JS code run?
Ans :- When a code is to executed, A Global Execution Context is defined which has Two Section Memory|Code, 
when a variable is to declared in the entire code firstly it's memory is allocated in the GEC as A type of undefined 
then when the code execution reaches the particular line it's value is loaded in it's allocated memory. 
For a function, A local execution context is allocated which has it's own Memory|Code and information about it's own variables
and functions. 


Q) Explain Global Execution Context.
Ans:- As per the above given answer, The GEC is declared with 1st phase = memory allocation, 2nd phase = Code Execution, 
the entire creation/deletion of the EC's is managed by the Call Stack which has all the ECs.


Q) What is Hositing?
Ans:- Calling a variable or function before it's initialization. A variable called before it's initialization would return undefined value type, 
whereas a function can be called before it's initialization but an arrow function would always return undefined.

Q) What is window and this?
Ans:- Window is a global object created with GEC and alongside it a 'this' variable is also created which points to the window object, where this === window //true.
Global space = All the variables decalred in the GEC. console.log(window.a) = console.log(a) = console.log(this.a) => It is predefinedly considered under global space.
Concept of allocating variable as undefined is termed as placeholder just so as to reserve it's space in the memory


Q) What is scope and block scope?
Ans:- Scope = where a variable can be accessed in the entire code. Block_Scope = Defined using {} where it's new EC would be created without declaring it's type.


Q) What is Lexical Environment?
Ans:- Local memory + Lexical environment of it's parent. Lexical env of GEC points to null. 


Q) What is Temporal Dead zone?
Ans:- Time between initializing "let" as undefined & assigning some value (Hoisting).


Q) What is Shadowing?
Ans:- Same named variable shadows it inside a block & also modifies it.
*/