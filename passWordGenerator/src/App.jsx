import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook -> whenever we have to take reference of something we use useRef hook. to use this we have to make a variable

  const passwordRef = useRef(null)

  //PAssword Genearator Method
  //useCallback hook | useCallback(fn, dependency)

  const passwordGenerator = useCallback(() => {
    //pick random chars from str, we can create a loop to pick a random chars from the str, but how many times to run the loop ? -> on the Basis of length 

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()-_+=[]{}|\\:;\"'<>,.?/~"
    }

    //So str is made, but how many times we have to run the loop to get the Final Password. That Depends on the length.So we used a for loop

    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * str.length + 1)  //see this in gpt or explore more how to generate random number

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  //function for copyPasswordToClipboard. We're using password as a dependancy at the end bcoz, when we'll copying the password that is generated are interlinked

  const copyPasswordToClipboard = useCallback(() => {

    passwordRef.current?.select();  //when we click copy,the text will be selected

    passwordRef.current?.setSelectionRange(0,15);  //this will select only the mentioned range

    window.navigator.clipboard.writeText(password)  //this thing will help us to take the PW stored in Password to the clipboard

  }, [password])

  useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>

        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='className="flex shadow rounded-lg  overflow-hidden mb-4'>

          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />

          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'

              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>

          </div>


          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"

              onChange={() => { setNumberAllowed((prev) => !prev) }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"

              onChange={() => { setCharAllowed((prev) => !prev) }}
            />
            <label htmlFor='characterInputInput'>Characters</label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
