import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Heading/Heading'

import Props1 from './LearnProps/Props1'
import Profile from './LearnProps/Profile'
import ArrayProps from './LearnProps/ArrayProps'
import HeaderProps from './LearnProps/HeaderProps'

function App() {

  const contents = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(),
  };

  return (
    <>
      {/* Pass Props to Child Component. Here Props1 is the Child component to parent App */}
      {/* <Props1 
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
      /> */}
      {/* Read props inside the child component */}
      {/* <Props1
      person={{ 
        name: 'Katsuko Saruhashi', 
        imageId: 'YfeOqp2'}}
        size={100}
      /> */}

      {/* <Profile
      profile1 = {{name: "Sangeet", age: 25, place:"Assam" , dob:"March" }}
     

      /> */}

      {/* <ArrayProps
         skills={['HTML', 'CSS', 'JavaScript']}
      /> */}

      
{/* Passing the above object as props in the below Component */}
      <HeaderProps data = {contents}/>
    </>
  );
}

export default App
