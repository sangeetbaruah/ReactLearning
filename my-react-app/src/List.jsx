

function List(){

    //array of Fruits

    //enclosing them in {} to make them OBJECTS so that they can have some Properties like calorie

    

     fruits.sort((a,b) => a.name.localeCompare(b.name));  //ALPHABETICAL
    //  fruits.sort((a,b) => b.name.localeCompare(a.name));  // REVERSE ALPHABETICAL
    // fruits.sort((a,b) => a.calorie  - b.calorie); //NUMERIC
    // fruits.sort((a,b) => a.calorie  - b.calorie); //REVERSE NUMERIC

    //Convert the array of items to list items
    // const listItems = fruits.map(fruit  => <li key={fruit.id}>
    //                                         {fruit.name}: &nbsp;
    //                                         <b>{fruit.calorie}</b></li>);


    //FILTER Objects by certain criteria

    const lowcalFruits = fruits.filter(fruit => fruit.calorie <100);

    const listItems = lowcalFruits.map(lowcalFruit  => <li key={lowcalFruit.id}>
        {lowcalFruit.name}: &nbsp;
        <b>{lowcalFruit.calorie}</b></li>);



    return(<ul>{listItems}</ul>);
}



export default List