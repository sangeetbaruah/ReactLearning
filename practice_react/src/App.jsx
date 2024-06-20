import Button from "./Button/Button"
import Footer from "./Footer"
import Header from "./Header"
import Heading from "./Heading/Heading"
import Fields from "./InputField/Fields"

import './App.css';


function App() {

  return (
    <>
      {/* <Header />
      <h1>Sangeet</h1>
      <Footer /> */}

      <div className="appcontainer">
        <Heading />
        <Fields />
        <Button />
      </div>

    </>
  )
}

export default App
