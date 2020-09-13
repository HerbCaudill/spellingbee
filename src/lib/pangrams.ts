import { distinctLetters } from './distinctLetters'
import { words } from './words'

export const isPangram = (word: string): boolean => distinctLetters(word).length === 7
export const pangrams = words.filter(isPangram)
