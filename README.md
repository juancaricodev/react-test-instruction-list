# Instruction List App

A small React + TypeScript + Vite application for managing a list of instructions.

## Features

- Add new instructions with a single input field.
- Validate entries to prevent empty or duplicate instructions.
- Reorder instructions using up/down controls.
- Remove instructions from the list.

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Start development server

```bash
pnpm dev
```

Open the local URL shown in the terminal, typically `http://localhost:5173`.

## Available Scripts

- `pnpm dev` - start the Vite development server
- `pnpm build` - compile the app for production
- `pnpm preview` - preview the production build locally
- `pnpm lint` - run ESLint on the project

## Project Structure

- `src/App.tsx` - main application component
- `src/components/CreateInstruction` - input form for adding instructions
- `src/components/InstructionList` - list display with reorder/delete controls
- `src/types` - shared TypeScript types

## Notes

This project uses Vite, React 19, and TypeScript. If you prefer npm, the same scripts can be run with `npm` or `npx` where appropriate.
