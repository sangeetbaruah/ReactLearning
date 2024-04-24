import profilePic from './assets/sangeet_passphoto.jpg'



function Card(){
    return(
        <div className="card">
            <img className='card-image' src="{profilePic}" alt="Profile Picture" />

            <h2 className='card-title'>Sangeet</h2>
            <p className='card-text'>I'm learning ReactJs</p>

        </div>


    );

}

export default Card