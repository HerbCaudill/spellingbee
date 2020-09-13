import { Message } from './Message'

export interface State {
  input: string
  found: string[]
  message?: Message
  letters: string
  keyLetter: string
  displayLetters: string[]
  solutions: string[]
}

export type Action =
  | {
      type: 'ALPHA'
      payload: string
    }
  | { type: 'BACKSPACE' }
  | { type: 'ESCAPE' }
  | { type: 'ENTER' }
  | { type: 'SHUFFLE' }

export interface AppProps {
  letters: string
}
