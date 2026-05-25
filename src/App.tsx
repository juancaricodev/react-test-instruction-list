import { useState } from 'react'

import { CreateInstruction } from './components/CreateInstruction'
import { InstructionList } from './components/InstructionList'

import './App.css'

type Instruction = {
  order: number
  text: string
}

function App() {
  const [instructions, setInstructions] = useState<Instruction[]>([])

  return (
    <>
      <h1>Welcome to React with TypeScript!</h1>
      <p>This is a simple React application using TypeScript.</p>

      <CreateInstruction
        instructions={instructions}
        setInstructions={setInstructions}
      />

      <InstructionList
        instructions={instructions}
        setInstructions={setInstructions}
      />
    </>
  )
}

export default App
