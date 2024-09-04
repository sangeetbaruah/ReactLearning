

// React hooks - Special function that allows functional components to use react features without
//              writing class Components (React v16.8)
//              (useState, useEffect, useContext, useReducer, useCallback and more...)

import { useState } from "react"

// useState() - it allows creation of a Stateful variable
//              AND a setter Function to update its value in the Virtual DOM
//              [name, setName]


function ReactHooks(){
    //stateful variable
    const [name , setName] = useState("Guest");  //initially it'll appear as Guest

    const[age, setAge] = useState(0);

    const[isEmployed , setIsEmployed] = useState(false);


    const updateName = () =>{
        setName ("Sangeet");   //
        
    }

    const incrementAge = () =>{
        setAge(age + 1);
    }

    const toggleEmployStatus= () =>{
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick = {updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick = {incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick = {toggleEmployStatus}>Toggle Status</button>
        </div>
    );
    
}

export default ReactHooks