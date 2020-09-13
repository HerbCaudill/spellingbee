import { words } from './words'

export const isPangram = (word: string): boolean => words[word].distinct === 7
export const pangrams = Object.keys(words).filter(isPangram)
