import React, { useEffect, useReducer, useState } from 'react'
import { solutions as getSolutions } from '../lib/solutions'

const initialState = {
  input: '',
  found: [],
} as State

const reducer = (state: State, action: Action) => {
  const { input, found } = state
  switch (action.type) {
    case 'ALPHA':
      return { ...state, input: input + action.payload }

    case 'BACKSPACE':
      return { ...state, input: input.slice(0, input.length - 1) }

    case 'ESCAPE':
      return { ...state, input: '' }

    case 'ENTER':
      return { ...state, input: '', words: found.concat(state.input) }
  }
}

export default function App({ puzzle }: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [solutions, setSolutions] = useState<string[]>([])

  useEffect(() => {
    setSolutions(getSolutions(puzzle))
  }, [puzzle])
  useEffect(() => {
    function downHandler({ key }: KeyboardEvent) {
      if (isAlpha(key)) {
        dispatch({
          type: 'ALPHA',
          payload: key.toUpperCase(),
        })
      } else if (key === 'Delete' || key === 'Backspace') {
        dispatch({ type: 'BACKSPACE' })
      } else if (key === 'Escape') {
        dispatch({ type: 'ESCAPE' })
      } else if (key === 'Enter') {
        dispatch({ type: 'ENTER' })
      }
      // console.log(key)
    }

    window.addEventListener('keydown', downHandler)
    return () => window.removeEventListener('keydown', downHandler)
  }, [])

  return (
    <div>
      <div>{puzzle}</div>
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
}

type Action =
  | {
      type: 'ALPHA'
      payload: string
    }
  | { type: 'ENTER' }
  | { type: 'ESCAPE' }
  | { type: 'BACKSPACE' }

interface AppProps {
  puzzle: string
}
