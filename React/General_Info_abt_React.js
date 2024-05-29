/*
Q) Functions of React.
Ans:- React is a JS library used for building dynamic and interactive interfaces.

Advantages of React:-
Component-Based architecture, Virtual-DOM, Unidirectional Dataflow(Data flows from parent to child components via props), rich ecosystem & community. 


COMPONENT-BASED ARCHITECTURE
React follows a component-based architecture where UIs are broken down into reusable pieces called components. 
Each component manages its state and can be composed together to build complex UIs. This approach promotes code reusability, maintainability, and scalability.

VIRTUAL-DOM
React utilizes a virtual DOM (Document Object Model) to improve performance. Instead of directly interacting with the browser's DOM, 
React creates a lightweight virtual representation of the DOM in memory. When the state of a component changes, React compares the virtual DOM with the real DOM 
and only updates the parts that have changed. This minimizes the number of DOM manipulations, resulting in faster rendering.

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of HTML, XHTML, or XML documents as a tree-like structure, 
where each node represents a part of the document, such as elements, attributes, and text.


jsx => JAVASCRIPT XML
To write HTML-like code within JavaScript.
Notice that <MyButton /> starts with a capital letter. That’s how you know it’s a React component. 
React component names must always start with a capital letter, while HTML tags must be lowercase.


npm (Node Package Manager):
=npm is the default package manager for Node.js, used for installing, managing, and publishing JavaScript packages.
=It is primarily used for installing packages globally (-g flag) or locally in a project's node_modules directory.
=npm is typically used for installing packages that are required for development or production dependencies of a project. 
=For example, you might use npm to install packages like React, Express.js, or lodash for your project.
=npm also provides commands for initializing new projects (npm init), publishing packages (npm publish), 
 and managing package versions (npm version, npm update, etc.).


npx (Node Package Executer):
=npx comes bundled with npm (since npm version 5.2.0), used to execute Node.js packages without installing them globally.
=Run commands from npm packages as if they were installed globally, without actually having to install them globally. 
=This is particularly useful for running packages that you only need to use occasionally or for one-off tasks.
=When you run a command with npx, it checks if the package exists in your local node_modules directory, and if not, 
 it downloads and installs the package temporarily, executes the command, and then removes the temporary installation.
=npx is commonly used for running command-line tools or scripts that are installed as npm packages. 
=For example, you might use npx to run tools like create-react-app, Vue CLI, or webpack without having to install them globally.

Basically, we need to use the npm command if need to install the libraries in local node_modules, 
whereas npx is kind of a one-time temporary installation to execute th  e task and then delete the same hence no traces of it found in the global space.

State and props are used to manage data and communication between components, but serve different purposes:

State:
= State represents the internal data of a component. It is mutable and can be updated using the setState() method provided by React.
= Each component in React can have its own state, which can be initialized in the component's constructor using this.state.
= Changes to the state trigger re-renders of the component, meaning when the state of a component changes, 
  React automatically re-renders the component to reflect the updated state in the UI.
= State should be used for data that is internal to a component and is expected to change over time, such as user input, form values, or toggling UI elements.


Props (Properties):
= Props are read-only data passed from parent to child components. They are used to customize and configure child components.
= Props are passed as attributes to components when they are instantiated in JSX, 
  and they are accessible within the component via this.props (for class components) or as arguments to the functional component.
= Unlike state, props are immutable and cannot be changed within the component. They are passed down from parent components and are fixed throughout the component's lifecycle.
= Props are useful for creating reusable components and establishing a unidirectional data flow in React applications, where data flows from parent components to child components.

COMPONENT LIFECYCLE
   - **Mounting**: Methods like `constructor()`, `render()`, and `componentDidMount()` are executed when a component is being created and inserted into the DOM.
   - **Updating**: Methods like `shouldComponentUpdate()`,`render()`,`componentDidUpdate()`are invoked when a component's state or props change, causing a re-render.
   - **Unmounting**:The`componentWillUnmount()`method is called just before a component is removed from the DOM. It allows for cleanup tasks like removing event listeners or timers.

REACT HOOKS
= Hooks are functions that allow developers to use state and other React features without writing a class. Hooks enable functional components to have stateful logic, 
  side effects, and access to React features like context and lifecycle methods. Popular hooks include `useState()`, `useEffect()`, `useContext()`, etc.

  USESTATE()
=`useState()` is a built-in React Hook that allows functional components to add local state.It returns a stateful value and a function to update that value, 
 similar to this.state and this.setState() in class components.

 useEFFECT()
=`useEffect()` is a React Hook used for performing side effects in functional components.
   It allows you to perform operations like data fetching, subscriptions, or manually changing the DOM after the component has rendered.
   Accepts a function (the effect) and an optional array of dependencies. The effect runs after every render unless the dependencies have changed.

useCOntext()
= Context lets a component receive information from distant parents without passing it as props. 
  useContext reads and subscribes to a context.

 useRef()
 = Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID
   useRef declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.
Custom Hooks:-
= Custom Hooks are user-defined functions that encapsulate reusable logic.
= Custom Hooks should start with the word "use" to indicate that they are Hooks, but they are not required to actually use React's built-in Hooks.

React Router:-
=React Router is a popular library for handling routing in React applications. It allows developers to define different routes within their application 
 and render different components based on the URL. React Router provides features like nested routes, route parameters, and programmatic navigation


Functional based and class based components
side effects and fragements

Usecontext(), UseRef

Framework and libraries
 */ 
/*
CMNDS = 
Can run a code using terminal by => node ./filename
npm create vite@latest 
*/
let a = 5;
console.log(a);