function Footer(){


    //we can write JS code inside the return statment. Use {}
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} Your Website Name</p>
        </footer>
    );

}

export default Footer