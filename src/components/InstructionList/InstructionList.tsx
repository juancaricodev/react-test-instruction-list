import type { InstructionListProps } from './types'
import type { Instruction } from '@/types'

import './InstructionList.css'

const InstructionList: React.FC<InstructionListProps> = ({ instructions, setInstructions }) => {
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
  )
}

export { InstructionList }
