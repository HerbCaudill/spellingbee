import React, { useEffect, useReducer, useState } from 'react'
import { solutions as getSolutions } from '../lib/solutions'
import { Message } from './Message'

const initialState = {
  input: '',
  found: [],
} as State

export default function App({ letters }: AppProps) {
  const keyLetter = letters[0]
  const [solutions, setSolutions] = useState<string[]>([])

  const reducer = (state: State, action: Action) => {
    state.message = undefined
    const { input, found } = state
    switch (action.type) {
      case 'ALPHA':
        return { ...state, input: input + action.payload }

      case 'BACKSPACE':
        return { ...state, input: input.slice(0, input.length - 1) }

      case 'ESCAPE':
        return { ...state, input: '' }

      case 'ENTER': {
        let message: Message
        if (!solutions.includes(input)) message = Message.NOT_A_WORD
        else if (found.includes(input)) message = Message.ALREADY_FOUND
        else if (input.length < 4) message = Message.TOO_SHORT
        else if (!input.includes(keyLetter)) message = Message.MISSING_KEY
        else if (input.split('').some(l => !letters.includes(l))) message = Message.BAD_LETTERS
        else {
          message = Message.GOOD
          found.push(input)
        }
        return { ...state, message, input: '', found }
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => setSolutions(getSolutions(letters)), [letters])

  useEffect(() => {
    function downHandler({ key }: KeyboardEvent) {
      if (isAlpha(key)) dispatch({ type: 'ALPHA', payload: key.toUpperCase() })
      else if (key === 'Delete' || key === 'Backspace') dispatch({ type: 'BACKSPACE' })
      else if (key === 'Escape') dispatch({ type: 'ESCAPE' })
      else if (key === 'Enter') dispatch({ type: 'ENTER' })
    }

    window.addEventListener('keydown', downHandler)
    return () => window.removeEventListener('keydown', downHandler)
  }, [])

  return (
    <div>
      <Puzzle letters={letters} />
      <div>you typed: {state.input}</div>
      <div>
        words:
        {state.found.map((word, i) => (
          <p key={i}>{word}</p>
        ))}
      </div>
    </div>
  )
}

const isAlpha = (key: string) => /^[A-Za-z]$/.test(key)

interface State {
  input: string
  found: string[]
  message?: Message
}

type Action =
  | { type: 'ALPHA'; payload: string }
  | { type: 'ENTER' }
  | { type: 'ESCAPE' }
  | { type: 'BACKSPACE' }

interface AppProps {
  letters: string
}
const Puzzle = ({ letters }: { letters: string }) => {
  return <div>{letters}</div>
}
