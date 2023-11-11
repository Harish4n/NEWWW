import { useState } from "react";
const Student = () =>{
 const [name, setName] = useState("Vikas");
 const changeName = () =>{
 setName("Vikas Singh")
 }
 return(
 <div>
 <h1>My name is - {name}</h1>
 <button type="button" onClick={changeName}>click me</button>
 </div>
 )
} 
function App() {
    return (
    <div className="App">
    {/* rendering components */}
    <Student/>
    </div>
    );
   } export default App; 