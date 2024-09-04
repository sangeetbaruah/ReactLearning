


function Profile({profile1, quantity=100}){
    return(
        <div>
           <p>Name: {profile1.name}</p> 
            <p>Age:{profile1.age}</p>
            <p>Place:{profile1.place}</p>
            <p>DOB:{profile1.dob}</p>
            <p>Quantity:{quantity}</p>
        </div>
    );
}


export default Profile