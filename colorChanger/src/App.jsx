import { useState } from 'react'

import './App.css'

function App() {

  const [color, setColor] = useState("olive")

  return (

    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className='fixed  flex-wrap justify-center bottom-12  inset-x-20 px-2'>

        <div className='flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>

          <button onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}>Red</button>

          <button onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}>Green</button>

          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }}>Blue</button>

          <button onClick={() => setColor("lavendar")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "lavendar" }}>Lavendar</button>

          <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{ backgroundColor: "yellow" }}>Yellow</button>

          <button onClick={() => setColor("cyan")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "cyan" }}>Cyan</button>

          <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "purple" }}>Purple</button>
        </div>
      </div>
    </div>

  )
}

export default App


// onClick = {() => setColor("red")}
// onClck expects to give him a function,it doesn't want the return result of the FUNCTION, but we are giving the reference of a function