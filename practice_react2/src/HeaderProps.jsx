


function HeaderProps(props) {

    return (
        <div >
            <h1>{props.welcome}</h1>
            <h2>{props.title} </h2>
            <h3>{props.subtitle}</h3>
            <p>
                {props.firstName} {props.lastName}
            </p>
            <small>{props.date}</small>
        </div>
    );
}

export default HeaderProps