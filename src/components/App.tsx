import React, { Reducer, useReducer } from 'react'
import { isAlpha } from '../lib/isAlpha'
import { randomSort } from '../lib/randomSort'
import { solutions as getSolutions } from '../lib/solutions'
import { Action, AppProps, Message, State } from '../types'
import { FoundWords } from './FoundWords'
import { InputDisplay } from './InputDisplay'
import { MessageDisplay } from './MessageDisplay'
import { Grid } from './Grid'
import { useKeyboard } from '../hooks/useKeyboard'
import { isPangram } from '../lib/pangrams'

const reducer: Reducer<State, Action> = (state, action) => {
  const { input, found, solutions, letters, keyLetter, displayLetters } = state
  state.message = undefined

  const getMessage = (s: string) => {
    if (found.includes(s)) return Message.ALREADY_FOUND
    else if (s.length < 4) return Message.TOO_SHORT
    else if (!s.includes(keyLetter)) return Message.MISSING_KEY
    else if (s.split('').some(l => !letters.includes(l))) return Message.BAD_LETTERS
    else if (!solutions.includes(s)) return Message.NOT_A_WORD
    else if (isPangram(s)) return Message.PANGRAM
    else return Message.GOOD
  }

  switch (action.type) {
    case 'ALPHA':
      return { ...state, input: input + action.payload }

    case 'BACKSPACE':
      return { ...state, input: input.slice(0, input.length - 1) }

    case 'CANCEL':
      return { ...state, input: '' }

    case 'SHUFFLE':
      return { ...state, displayLetters: displayLetters.sort(randomSort) }

    case 'COMMIT': {
      const message: Message = getMessage(input)
      return { ...state, input: '', message, found: [...found, input] }
    }
  }
  return state
}

export default function App({ letters }: AppProps) {
  const [keyLetter, ...otherLetters] = letters.split('')

  useKeyboard(({ key }: KeyboardEvent) => {
    if (isAlpha(key)) dispatch({ type: 'ALPHA', payload: key.toUpperCase() })
    else if (key === 'Delete' || key === 'Backspace') dispatch({ type: 'BACKSPACE' })
    else if (key === 'Escape') dispatch({ type: 'CANCEL' })
    else if (key === 'Enter') dispatch({ type: 'COMMIT' })
    else if (key === ' ') dispatch({ type: 'SHUFFLE' })
  })

  const initialState = {
    input: '',
    found: [],
    letters,
    keyLetter,
    solutions: getSolutions(letters),
    displayLetters: otherLetters,
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="max-w-xl m-auto">
      <MessageDisplay message={state.message} />
      <InputDisplay input={state.input} scale={30} />
      <div className="mt-3"></div>
      <Grid keyLetter={keyLetter} scale={45} displayLetters={state.displayLetters} />
      <FoundWords words={state.found} />
    </div>
  )
}
