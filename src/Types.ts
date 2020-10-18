export interface State {
  input: string
  found: string[]
  score: number
  message?: string
  messageType?: MessageType
  letters: string
  keyLetter: string
  otherLetters: string[]
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

export enum MessageType {
  REJECT,
  ACCEPT,
  PANGRAM,
}
