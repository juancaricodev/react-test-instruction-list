import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage('')
      }, 3000)
    }
  }, [errorMessage])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleAddInstruction = () => {
    if (inputValue.trim() === '') {
      setErrorMessage('Please enter a valid instruction.')
    } else {
      console.log('Instruction added:', inputValue)
      setInputValue('')
      setErrorMessage('')
    }
  }

  return (
    <>
      <h1>Welcome to React with TypeScript!</h1>
      <p>This is a simple React application using TypeScript.</p>

      <section className='add-instruction'>
        <input
          className='add-instruction__input'
          type="text"
          name="text-input"
          id="text-input"
          placeholder="Type something..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className='add-instruction__button' onClick={handleAddInstruction}>Add Instruction</button>
        <span className='add-instruction__error-message'>{errorMessage}</span>
      </section>
    </>
  )
}

export default App
