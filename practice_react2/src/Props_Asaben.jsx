// Props is a special keyword in React that stands for properties and is being used to pass data from one component to another and mostly from parent component to child component. We can say props is a data carrier or a means to transport data.




function Props_Asaben(props){
    return(
        <div>
            <p>FirstName: {props.firstname} </p>
            <p>LastName: {props.lastname}</p>
        </div>


    );
}

export default Props_Asaben