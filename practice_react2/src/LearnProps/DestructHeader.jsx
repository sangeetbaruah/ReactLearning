

//helper function can be put on the Top of the Component

const showDate = (time) => {
    //array of months
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    //time.getMonth() retrieves the month index (0 for January, 11 for December).
    //The month name is shortened to the first three letters using .slice(0, 3).
    const month = months[time.getMonth()].slice(0, 3);

    const year = time.getFullYear();
    const date = time.getDate();

    return `${month} ${date}, ${year}`;

};


function DestructHeader({
    data: {
        welcome,
        title,
        subtitle,
        author: { firstName, lastName },
        date
    }
}) {
    return (
        <header>
            <div>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>
                    {firstName} {lastName}
                </p>
                <small>{showDate(date)}</small>
            </div>
        </header>
    );
}

export default DestructHeader