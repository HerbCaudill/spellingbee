import React, { Reducer, useReducer } from 'react'
import { isAlpha } from '../lib/isAlpha'
import { randomSort } from '../lib/randomSort'
import { solutions as getSolutions } from '../lib/solutions'
import { Action, AppProps, State, MessageType } from '../types'
import { FoundWords } from './FoundWords'
import { InputDisplay } from './InputDisplay'
import { MessageDisplay } from './MessageDisplay'
import { Grid } from './Grid'
import { useKeyboard } from '../hooks/useKeyboard'
import { isPangram } from '../lib/isPangram'

const reducer: Reducer<State, Action> = (state, action) => {
  const { input, found, solutions, letters, keyLetter, displayLetters } = state
  state.message = undefined

  function getAffirmation(input: string) {
    switch (input.length) {
      case 4:
        return 'Good!'
      case 5:
        return 'Nice!'
      case 6:
      case 7:
      case 8:
        return 'Awesome!'
      default:
        return 'Excellent!!'
    }
  }

  const getMessage = (s: string) => {
    let message: string | undefined
    let messageType: MessageType = MessageType.REJECT
    if (found.includes(s)) message = 'Already found!'
    else if (s.length < 4) message = 'Too short'
    else if (!s.includes(keyLetter)) message = 'Missing center letter'
    else if (s.split('').some(l => !letters.includes(l))) message = 'Bad letters'
    else if (!solutions.includes(s)) message = 'Not in word list'
    else if (!isPangram(s)) {
      messageType = MessageType.ACCEPT
      message = getAffirmation(input)
    } else {
      messageType = MessageType.PANGRAM
      message = 'Pangram!'
    }
    return { message, messageType }
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
      const { message, messageType } = getMessage(input)
      return { ...state, input: '', message, messageType, found: [...found, input] }
    }
  }
  return state
}

export default function App({ letters }: AppProps) {
  const [keyLetter, ...otherLetters] = letters.split('')

  const initialState = {
    input: '',
    found: [],
    letters,
    keyLetter,
    solutions: getSolutions(letters),
    displayLetters: otherLetters,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useKeyboard(({ key }: KeyboardEvent) => {
    if (isAlpha(key)) dispatch({ type: 'ALPHA', payload: key.toUpperCase() })
    else if (key === 'Delete' || key === 'Backspace') dispatch({ type: 'BACKSPACE' })
    else if (key === 'Escape') dispatch({ type: 'CANCEL' })
    else if (key === 'Enter') dispatch({ type: 'COMMIT' })
    else if (key === ' ') dispatch({ type: 'SHUFFLE' })
  })

  return (
    <div className="max-w-xl m-auto">
      <MessageDisplay message={state.message} messageType={state.messageType} />
      <InputDisplay input={state.input} scale={30} />
      <div className="mt-3"></div>
      <Grid keyLetter={keyLetter} scale={45} displayLetters={state.displayLetters} />
      <FoundWords words={state.found} />
    </div>
  )
}
