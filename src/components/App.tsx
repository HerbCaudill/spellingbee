import React, { useReducer } from 'react'
import { isAlpha } from '../lib/isAlpha'
import { getSolutions } from '../lib/getSolutions'
import { AppProps } from '../types'
import { FoundWords } from './FoundWords'
import { InputDisplay } from './InputDisplay'
import { MessageDisplay } from './MessageDisplay'
import { Grid } from './Grid'
import { useKeyboard } from '../hooks/useKeyboard'
import { reducer } from './reducer'
import { Score } from './Score'

export default function App({ letters }: AppProps) {
  const [keyLetter, ...otherLetters] = letters.split('')

  const initialState = {
    input: '',
    found: [],
    score: 0,
    letters,
    keyLetter,
    otherLetters,
    solutions: getSolutions(letters),
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
      <InputDisplay
        input={state.input}
        keyLetter={keyLetter}
        otherLetters={otherLetters}
        scale={30}
      />
      <div className="mt-3"></div>
      <Grid keyLetter={keyLetter} otherLetters={state.otherLetters} scale={45} />
      <Score score={state.score} letters={letters}></Score>
      <FoundWords words={state.found} />
    </div>
  )
}
