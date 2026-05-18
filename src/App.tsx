import { useEffect, useState } from 'react'

import './App.css'

const instructionsList = [
  { order: 1, text: 'Instruction 1' },
  { order: 2, text: 'Instruction 2' },
  { order: 3, text: 'Instruction 3' }
]

type Instruction = {
  order: number
  text: string
}

function App() {
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [instructions, setInstructions] = useState<Instruction[]>([...instructionsList])

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
      // TODO: Add error message for duplicate instruction
    } else {
      const newInstruction: Instruction = {
        order: instructions ? instructions.length + 1 : 1,
        text: inputValue.trim()
      }

      setInstructions([...instructions, newInstruction])
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
          placeholder="Add a new instruction"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className='add-instruction__button' onClick={handleAddInstruction}>Add Instruction</button>
        <span className='add-instruction__error-message'>{errorMessage}</span>
      </section>

      <section className='instruction-list'>
        <h2>Instructions</h2>
        {instructions.length === 0 ? (
          <p>Please add a new instruction.</p>
        ) : (
          <ul>
            {instructions.map((instruction) => (
              <li key={instruction.order}>
                <span>{instruction.order}.</span>
                <span>{instruction.text}</span>
                {/* TODO: <button>Move Up</button>
                <button>Move Down</button>
                <button>Delete</button> */}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default App
