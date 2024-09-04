

function Props1({person,size}){
    return(
        <div>
            Hello, Lets learn Props
            <h2>
                {/* Name : {props.person.name} */}
                Name: {person.name} 
                <br/>
                Size:{size}
            </h2>
        </div>

    );
}

export default Props1