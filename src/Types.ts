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
  | { type: 'CANCEL' }
  | { type: 'COMMIT' }
  | { type: 'SHUFFLE' }

export interface AppProps {
  letters: string
}

export enum Message {
  'NOT_A_WORD',
  'TOO_SHORT',
  'BAD_LETTERS',
  'MISSING_KEY',
  'ALREADY_FOUND',
  'GOOD',
  'EXCELLENT',
  'PANGRAM',
}
