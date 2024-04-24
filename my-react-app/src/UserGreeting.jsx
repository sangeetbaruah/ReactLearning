
// Conditional Rendering: allows you to control what gets rendered in your application based on certain conditions (show, hide or change components)

function UserGreeting(props){

    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }

    // else{
    //     return <h2>Please Log In</h2>
    // }

    return(props.isLoggedIn ? 

            <h2 className="Welcome">Welcome {props.username}</h2> :

            <h2 className="Login">Please Log In</h2>
    
    )
   
}


export default UserGreeting