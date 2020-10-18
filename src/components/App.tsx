import React, { Reducer, useEffect, useReducer } from 'react'
import { isAlpha } from '../lib/isAlpha'
import { randomSort } from '../lib/randomSort'
import { solutions as getSolutions } from '../lib/solutions'
import { Action, AppProps, Message, State } from '../Types'
import { FoundWords } from './FoundWords'
import { InputDisplay } from './InputDisplay'
import { MessageDisplay } from './MessageDisplay'
import { Puzzle } from './Puzzle'

const reducer: Reducer<State, Action> = (state, action) => {
  state.message = undefined
  const { input, found, solutions, letters, keyLetter, displayLetters } = state
  switch (action.type) {
    case 'ALPHA':
      return { ...state, input: input + action.payload }

    case 'BACKSPACE':
      return { ...state, input: input.slice(0, input.length - 1) }

    case 'ESCAPE':
      return { ...state, input: '' }

    case 'ENTER': {
      let message: Message
      let _found = [...found]
      if (found.includes(input)) message = Message.ALREADY_FOUND
      else if (input.length < 4) message = Message.TOO_SHORT
      else if (!input.includes(keyLetter)) message = Message.MISSING_KEY
      else if (input.split('').some(l => !letters.includes(l))) message = Message.BAD_LETTERS
      else if (!solutions.includes(input)) message = Message.NOT_A_WORD
      else {
        message = Message.GOOD
        _found.push(input)
      }
      return { ...state, input: '', message, found: _found }
    }

    case 'SHUFFLE':
      return { ...state, displayLetters: displayLetters.sort(randomSort) }
  }
  return state
}

export default function App({ letters }: AppProps) {
  const [keyLetter, ...otherLetters] = letters.split('')

  useEffect(() => {
    function keyHandler({ key }: KeyboardEvent) {
      if (isAlpha(key)) dispatch({ type: 'ALPHA', payload: key.toUpperCase() })
      else if (key === 'Delete' || key === 'Backspace') dispatch({ type: 'BACKSPACE' })
      else if (key === 'Escape') dispatch({ type: 'ESCAPE' })
      else if (key === 'Enter') dispatch({ type: 'ENTER' })
      else if (key === 'Space') dispatch({ type: 'SHUFFLE' })
    }

    window.addEventListener('keydown', keyHandler)
    return () => window.removeEventListener('keydown', keyHandler)
  }, [])

  const [state, dispatch] = useReducer(reducer, {
    input: '',
    found: [],
    letters,
    keyLetter,
    solutions: getSolutions(letters),
    displayLetters: otherLetters,
  })

  return (
    <div className="max-w-md m-auto">
      <MessageDisplay message={state.message} />
      <InputDisplay input={state.input} />
      <Puzzle keyLetter={keyLetter} displayLetters={state.displayLetters} />
      <FoundWords words={state.found} />
    </div>
  )
}
