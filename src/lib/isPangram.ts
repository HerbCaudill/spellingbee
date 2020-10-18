import { distinctLetters } from './distinctLetters'

export const isPangram = (word: string): boolean => distinctLetters(word).length === 7
