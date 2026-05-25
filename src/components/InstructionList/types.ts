import type { Instruction } from '../types'

export type InstructionListProps = {
  instructions: Instruction[];
  setInstructions: React.Dispatch<React.SetStateAction<Instruction[]>>;
}
