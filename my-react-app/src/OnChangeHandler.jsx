import { useState } from "react"

// onChange - Event handler used primarily with the FOrm elements
//             Eg. <input>, <textarea>, <select>, <radio>
//              Triggers a function every time the value of the input changes

// When you type in an input field: Each time you press a key, an onChange event is triggered.
// event.target: Points to the input element where you typed.
// event.target.value: Fetches the current text in that input field.


function OnChangeHandler(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);

    //func to handle name change
    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    return(
    <>
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>
        </div>

        <div>
            <input value={quantity} type="number" onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>
        </div>
    </>

    );
}

export default OnChangeHandler