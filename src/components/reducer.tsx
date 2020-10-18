import { Reducer } from 'react'
import { randomSort } from '../lib/randomSort'
import { Action, State, MessageType } from '../types'
import { isPangram } from '../lib/isPangram'

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

export const reducer: Reducer<State, Action> = (state, action) => {
  const { input, found, solutions, letters, keyLetter, score, otherLetters } = state
  state.message = undefined

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
      return { ...state, otherLetters: otherLetters.sort(randomSort) }

    case 'COMMIT': {
      const { message, messageType } = getMessage(input)
      return { ...state, input: '', message, messageType, found: [...found, input], score: score }
    }
  }
  return state
}
