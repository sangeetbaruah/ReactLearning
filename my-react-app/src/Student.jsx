// PROPS : Read only properties that are shared between components. a parent component can send data to a child Component. Props is an Object of JavaScript
// <Component key=value />



//      proptypes = a mechanism that ensures that the passedd value is of the correct datatype.
// age: PropTypes.number

import PropTypes from 'prop-types'

//props is a javascript object
function Student(props){

    // When we send Key:Value pair to a component, they are all stored in the props Object. to get the value associated with the key of the Object we do props.name_of_key. For eg- when we sent "Spongebob from App.jsx to Student.jsx, it got stored in props. So to get that we have to do like that"

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            
            {/* boolean does'nt appear in JSX, so it can be used like this */}
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student