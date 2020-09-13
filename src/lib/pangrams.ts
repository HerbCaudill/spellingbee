import { words } from './words'

export const pangrams = Object.keys(words).filter(word => words[word].distinct === 7)
