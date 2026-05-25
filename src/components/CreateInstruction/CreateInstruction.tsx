import { useState, useEffect } from 'react'

import type { CreateInstructionProps } from './types'
import type { Instruction } from '../types'

const CreateInstruction: React.FC<CreateInstructionProps> = ({ instructions, setInstructions }) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

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

  return (
    <section className='create-instruction'>
      <input
        className='create-instruction__input'
        type="text"
        name="text-input"
        id="text-input"
        placeholder="Add a new instruction"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className='create-instruction__button'
        onClick={handleAddInstruction}
      >
        Add Instruction
      </button>
      <span className='create-instruction__error-message'>{errorMessage}</span>
    </section>
  )
}

export { CreateInstruction }
