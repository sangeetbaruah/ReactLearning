// import Header from './Header.jsx'
// import Footer from './Footer.jsx';
// import Food from './Food.jsx';
// import Button from "./Button/Button";

// import Card from "./Card";

// import Student from "./Student";
import List from "./List";
import MyComponent from "./MyComponent";
import UserGreeting from "./UserGreeting";

function App() {

  return (
    //what we'll return here, we'll return header components. So to add a components we can write inside <> </>

    //we can't add both Header & Footer as return only takes 1 elemenet, so we use FRAGMENT <></>

    // <>
    //   <Header></Header>
    //   <Food></Food>
    //   <Footer></Footer>
    // </>

    // <Card/>

    // <Button/>
    // <>

    //   <Student name="SpongeBob"
    //     age={30}
    //     isStudent={true}
    //   />

    //   <Student name="Patrick"
    //     age={35}
    //     isStudent={false} />

    //   <Student name="Sandy"
    //     age={25}
    //     isStudent={true} />

    //   {/* Default props takes place is Student */}
    //   <Student/>  

    // </>

    // <UserGreeting 
    
    // isLoggedIn = {true} 
    // username = "Sangeet"
    // />

    // const fruits = [{id: 1,name:"Apple" , calorie: 95},
    //                 {id: 2,name:"Banana", calorie:45},
    //                 {id: 3,name:"Coconut", calorie:159}];

    // <List />

    
    
    <MyComponent/>
  );

}

export default App
