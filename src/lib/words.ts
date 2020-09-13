import { scrabbleWords } from './scrabbleWords'
import { frequency } from './frequency'

// only include words that are in frequency list
export const words = scrabbleWords.filter(w => w in frequency)
