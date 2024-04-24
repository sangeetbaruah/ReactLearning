import React, {useState} from "react";

function MyComponent(){

    const [name, setName] =useState();


    return(
        <div>
            <p>
                Name: {name}
            </p>
            <p>
            <button onClick={updateName}>Set Name</button>
            </p>
        </div>
    )


}

export default MyComponent