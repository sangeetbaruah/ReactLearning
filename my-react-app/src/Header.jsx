function Header(){

    //within the return, we can write pure HTML
    //React components can Return Single Elements, but we can create child elements
    return(
        <header>
            <h1>My Website</h1>

            <nav>
                <ul>
                    <li> <a href = "#">Home</a></li>
                    <li><a href = "#">About</a></li>
                    <li><a href = "#">Services</a></li>
                    <li><a href = "#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>


        </header>
    );


}

export default Header