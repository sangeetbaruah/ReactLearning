
// We can pass a function as props type to a React component.
function FunctionProps(props){
    
    return(
        <div>
            <button onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    );
}

export default FunctionProps