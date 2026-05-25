import type { Instruction } from '../types'

export type CreateInstructionProps = {
  instructions: Instruction[];
  setInstructions: React.Dispatch<React.SetStateAction<Instruction[]>>;
}
