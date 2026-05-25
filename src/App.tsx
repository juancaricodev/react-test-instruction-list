import { useState } from 'react'

import { CreateInstruction } from '@/components/CreateInstruction'
import { InstructionList } from '@/components/InstructionList'

import type { Instruction } from '@/types'

import '@/App.css'

function App() {
  const [instructions, setInstructions] = useState<Instruction[]>([])

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-header__title">My Instructions</h1>
        <p className="app-header__description">Add your instructions below.</p>
      </header>

      <main className="app-main">
        <CreateInstruction
          instructions={instructions}
          setInstructions={setInstructions}
        />

        <InstructionList
          instructions={instructions}
          setInstructions={setInstructions}
        />
      </main>
    </div>
  )
}

export default App
