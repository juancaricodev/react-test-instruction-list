import { useEffect, useState } from 'react'

import './App.css'

type Instruction = {
  order: number
  text: string
}

function App() {
  const [inputValue, setInputValue] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [instructions, setInstructions] = useState<Instruction[]>([])

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage('')
      }, 3000)
    }
  }, [errorMessage])

  /** Input Logic */

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  /** Instruction List Logic */

  const handleAddInstruction = () => {
    if (inputValue.trim() === '') {
      setErrorMessage('Please enter a valid instruction.')
    } else if (instructions.some((instruction) => instruction.text === inputValue.trim())) {
      setErrorMessage('This instruction already exists.')
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

  /** Instruction Logic */

  const handleMoveDown = (order: number) => {
    const newInstructions: Instruction[] = [...instructions]
    const indexA = newInstructions.findIndex((instruction) => instruction.order === order);
    const indexB = newInstructions.findIndex((instruction) => instruction.order === order + 1);

    [newInstructions[indexA].text, newInstructions[indexB].text] = [newInstructions[indexB].text, newInstructions[indexA].text]

    setInstructions(newInstructions)
  }

  const handleMoveUp = (order: number) => {
    const newInstructions: Instruction[] = [...instructions]
    const indexA = newInstructions.findIndex((instruction) => instruction.order === order - 1);
    const indexB = newInstructions.findIndex((instruction) => instruction.order === order);

    [newInstructions[indexA].text, newInstructions[indexB].text] = [newInstructions[indexB].text, newInstructions[indexA].text]

    setInstructions(newInstructions)
  }

  const handleDelete = (order: number) => {
    const newInstructions: Instruction[] = instructions
      .filter((instruction) => instruction.order !== order)
      .map((instruction, index) => ({ ...instruction, order: index + 1 }))

    setInstructions(newInstructions)
  }

  const handleDownDisabled = (order: number) => {
    return order === instructions.length
  }

  const handleUpDisabled = (order: number) => {
    return order === 1
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
        <button
          className='add-instruction__button'
          onClick={handleAddInstruction}
        >
          Add Instruction
        </button>
        <span className='add-instruction__error-message'>{errorMessage}</span>
      </section>

      <section className='instruction-list'>
        <h2 className='instruction-list__title'>Instructions</h2>
        {instructions.length === 0 ? (
          <p className='instruction-list__error-message'>Please add a new instruction.</p>
        ) : (
          <ul className='instruction-container'>
            {instructions.map((instruction) => (
              <li className='instruction' key={instruction.order}>
                <span className='instruction__order'>{instruction.order}.</span>
                <span className='instruction__text'>{instruction.text}</span>
                <button
                  className='instruction__button--down'
                  onClick={() => handleMoveDown(instruction.order)}
                  disabled={handleDownDisabled(instruction.order)}
                >
                  Move Down
                </button>
                <button
                  className='instruction__button--up'
                  onClick={() => handleMoveUp(instruction.order)}
                  disabled={handleUpDisabled(instruction.order)}
                >
                  Move Up
                </button>
                <button
                  className='instruction__button--delete'
                  onClick={() => handleDelete(instruction.order)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default App
