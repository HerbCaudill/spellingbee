import { scrabbleWords } from './scrabbleWords'
import { frequency } from './frequency'

// only include words that are in Norvig's frequency list
export const commonWords = scrabbleWords.filter(w => w in frequency)
