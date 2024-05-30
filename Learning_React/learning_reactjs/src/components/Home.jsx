import { useEffect } from "react";
import Filter_Blogs from "./Filter_Blogs";


// function Home(){
//     const [name, setName] = useState("something else");        //Used to make the name variable interactive and can re-render on the click event
//     const [age, setAge] = useState(21);     //useState can take any data type as it's input.
    
//     function handleClick(){  
//         console.log("Clicked");
//         setName("Deven");       
//         //For invoking a function without any input parameter we do not use () after function name.log("Clicked");
//     }

    
//     function handleClickAgain(name, e){ 
//         console.log("Hello "+name  , e.target);
//         setAge(99);
//         //For invoking a function with input parameter we use arrow function as () => {function_name(parameter)}
//         //The e parameter is responsible for the even e taking place
//     }


//     return(
//         <div className="parent">
//             <button onClick={handleClick}>Click ME</button><br></br>
//             <p>{ name } is { age } years old. </p>
//             <button onClick={(e) => handleClickAgain("Deven", e)}>Clicking ME Again</button>      
//         </div>
//     );
// }
// export default Home;
function Home(){

    useEffect(() =>{
        console.log("useEffect called");
    },[] );  // The [] is used so that the useEffect is executed only on the first render of the page.
    return(
        <Filter_Blogs />
    )
}
export default Home;