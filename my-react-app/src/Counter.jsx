import { useState } from "react";

function Counter(){
    
    const[counter, setCounter] = useState(0);

    const addValue = () =>{
        if(counter+1>20){
            alert("Limit Exceed")
        }
        else{
            setCounter(counter+1);

        }       
    }

    const removeValue = ()=>{
        if(counter-1<0){
            alert("Cannot be negative")
        }
        else{
        setCounter(counter-1)
        }
    }

    return(

        <div>
            <p>Counter: {counter}</p>
            <button onClick={addValue}> ADD Value</button>
            <br /> <br />

            <button onClick={removeValue}>Remove Value</button>
        </div>

    );
}

export default Counter